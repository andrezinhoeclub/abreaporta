/* Abre a Porta · carrega os dados do painel (Supabase) com reserva no dados.js · v1.0 */
(function () {
  var C = window.CONFIG_SUPABASE || {};
  var ligado = !!(C.supabaseUrl && C.supabaseChave);
  var cab = ligado ? { apikey: C.supabaseChave, Authorization: 'Bearer ' + C.supabaseChave } : {};

  function rest(caminho) {
    return fetch(C.supabaseUrl.replace(/\/$/, '') + '/rest/v1/' + caminho, { headers: cab })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); });
  }

  window.carregarSite = function () {
    var reserva = window.SITE || { artistas: [], shows: [], equipamentos: [], clientes: [] };
    if (!ligado) return Promise.resolve(reserva);
    return Promise.all([
      rest('artistas?select=*&publicado=eq.true&order=ordem.asc,nome.asc'),
      rest('shows?select=*&order=data.asc'),
      rest('config?select=*&id=eq.1')
    ]).then(function (r) {
      var arts = r[0], shows = r[1], cfg = r[2][0] || {};
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
        shows: shows.filter(function (s) { return porId[s.artista_id]; }).map(function (s) {
          return { data: s.data, artista: porId[s.artista_id], local: s.local, cidade: s.cidade, link: s.link, fechado: s.fechado };
        }),
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
