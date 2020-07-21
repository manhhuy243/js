
function AddRecord() {
    //var adoConn = new ActiveXObject("ADODB.Connection");
    var adoConn = new ActiveX("ADODB.Connection");
    //var adoRS = new ActiveXObject("ADODB.Recordset");
    var adoRS = new ActiveX("ADODB.Recordset");
    
    adoConn.Open("Provider=Microsoft.Jet.OLEDB.4.0;Data Source='/\Database3.mdb'");
    }