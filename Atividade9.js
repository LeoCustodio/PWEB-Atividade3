1 - 

function Retangulo(x,y){
    var area = x *y;
    return area;
    }

this.Retangulo(x,y);



2 -

function Conta(nomeCorrentista,banco, numeroConta, saldo){
    var saldoEspecial;
    var poupancaJuros;
    var dataVencimento;
}
function Corrente(){
    var saldoEspecial;
    //get
    this.getsaldoEspecial = function(){
        return saldoEspecial;
    }
    //set
    this.setsaldoEspecial = function(value){
        saldoEspecial = value;
    }
}

function PoupancaJuros(){
    //get
    this.getdataVencimento = function(){
        return dataVencimento;
    }
    //set
    this.setdataVencimento = function(value){
        dataVencimento = value;
    }
}

Corrente.prototype = new Conta();
PoupancaJuros.prototype = new Conta();

nCorrente  = new Corrente();
nPoupancaJuros = new PoupancaJuros();

nCorrente.setsaldoEspecial(123.000,000);
nCorrente.getsaldoEspecial();//123.000,000
nPoupancaJuros.setdataVencimento('12/03/2021');
nPoupancaJuros.getdataVencimento();//'12/03/2021'
