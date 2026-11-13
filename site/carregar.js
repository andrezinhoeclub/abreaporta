/* Abre a Porta · carrega os dados do painel (Supabase) + agendas dos sites dos artistas, com reserva no dados.js · v1.1 */
(function () {
  var C = window.CONFIG_SUPABASE || {};
  var ligado = !!(C.supabaseUrl && C.supabaseChave);
  var cab = ligado ? { apikey: C.supabaseChave, Authorization: 'Bearer ' + C.supabaseChave } : {};

  function rest(caminho) {
    return fetch(C.supabaseUrl.replace(/\/$/, '') + '/rest/v1/' + caminho, { headers: cab })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); });
  }

  /* junta os shows do painel com os que vêm sozinhos dos sites dos artistas, sem repetir a mesma data */
  function juntar(manuais, auto) {
    var vistos = {};
    manuais.forEach(function (s) { vistos[s.artista + '|' + s.data] = 1; });
    return manuais.concat(auto.filter(function (s) { return !vistos[s.artista + '|' + s.data]; }).map(function (s) {
      return { data: s.data, artista: s.artista, local: s.local, cidade: s.cidade, link: s.link || '', fechado: !!s.fechado || /fechad|particular|privad/i.test((s.local || '') + ' ' + (s.titulo || '')), hora: s.hora || '' };
    })).sort(function (a, b) { return String(a.data).localeCompare(String(b.data)); });
  }

  window.carregarSite = function () {
    var reserva = window.SITE || { artistas: [], shows: [], equipamentos: [], clientes: [] };
    if (!ligado) return Promise.resolve(reserva);
    var agendas = fetch(C.supabaseUrl.replace(/\/$/, '') + '/functions/v1/agendas', { headers: cab })
      .then(function (r) { return r.ok ? r.json() : { shows: [] }; })
      .catch(function () { return { shows: [] }; });
    return Promise.all([
      rest('artistas?select=*&publicado=eq.true&order=ordem.asc,nome.asc'),
      rest('shows?select=*&order=data.asc'),
      rest('config?select=*&id=eq.1'),
      agendas
    ]).then(function (r) {
      var arts = r[0], shows = r[1], cfg = r[2][0] || {}, auto = (r[3] && r[3].shows) || [];
      var porId = {};
      arts.forEach(function (a) { porId[a.id] = a.slug; });
      return {
        whatsapp: cfg.whatsapp || reserva.whatsapp || '',
        email: cfg.email || reserva.email,
        instagram: cfg.instagram || reserva.instagram,
        mostrarEquipamentos: cfg.mostrar_equipamentos !== false,
        equipamentos: cfg.equipamentos || [],
        clientes: cfg.clientes || [],
        artistas: arts,
        shows: juntar(shows.filter(function (s) { return porId[s.artista_id]; }).map(function (s) {
          return { data: s.data, artista: porId[s.artista_id], local: s.local, cidade: s.cidade, link: s.link, fechado: s.fechado };
        }), auto),
        doPainel: true
      };
    }).catch(function (e) { console.warn('Painel fora do ar, usando dados.js', e); return reserva; });
  };

  window.enviarPedido = function (p) {
    if (!ligado) return Promise.resolve(false);
    return fetch(C.supabaseUrl.replace(/\/$/, '') + '/rest/v1/pedidos', {
      method: 'POST',
      headers: Object.assign({ 'Content-Type': 'application/json', Prefer: 'return=minimal' }, cab),
      body: JSON.stringify(p)
    }).then(function (r) { return r.ok; }).catch(function () { return false; });
  };
})();
