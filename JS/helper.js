function initializeDB() {
    initSqlJs().then(function(SQL) {

        let dbFileElm = document.getElementById('dbfile');
        dbFileElm.onchange = function () {
          let f = dbFileElm.files[0];
          let r = new FileReader();
          r.onload = function () {
            const Uints = new Uint8Array(r.result);
            db = new SQL.Database(Uints);

            // first SQL
            let SQL_1 = db.exec("Select * From [2022_Taipa_CTM_1_Incl_Total];");
            console.log(SQL_1[0].values)
          }
          r.readAsArrayBuffer(f);
        }
    });
}