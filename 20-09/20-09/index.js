function  dividir( )
    {
        var dist = document.getElementById("info1").value
        var speed = document.getElementById("info2").value;

        document.getElementById("resultado1").value = (dist / speed).toFixed(1);
    }

    function ApagaNumeros () {
        document.getElementById("info1").value = ""
        document.getElementById("info2").value = ""
        document.getElementById("resultado1").value= ""
      }