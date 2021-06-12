/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var jisonXpaht = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[5,6,20],$V1=[2,15],$V2=[1,10],$V3=[1,12],$V4=[1,16],$V5=[1,17],$V6=[5,6],$V7=[5,6,9,11,24,50,51,52,53,54,55,56,57,58,59,60,61],$V8=[1,21],$V9=[1,24],$Va=[1,26],$Vb=[5,6,9,11,20,24,50,51,52,53,54,55,56,57,58,59,60,61],$Vc=[2,51],$Vd=[1,30],$Ve=[2,5,6,9,11,18,20,24,50,51,52,53,54,55,56,57,58,59,60,61],$Vf=[2,5,6,8,9,11,18,20,24,50,51,52,53,54,55,56,57,58,59,60,61],$Vg=[1,46],$Vh=[1,45],$Vi=[1,44],$Vj=[1,48],$Vk=[1,49],$Vl=[1,50],$Vm=[1,51],$Vn=[1,52],$Vo=[1,53],$Vp=[1,54],$Vq=[1,55],$Vr=[1,56],$Vs=[1,57],$Vt=[1,58],$Vu=[1,59],$Vv=[18,21,24,27,28,29,34,35,36,37,38,39,40,41,42,43,44,45],$Vw=[9,20,24,50,51,52,53,54,55,56,57,58,59,60,61],$Vx=[1,67],$Vy=[1,69],$Vz=[1,70],$VA=[1,74],$VB=[1,75],$VC=[9,56,57],$VD=[1,98],$VE=[1,96],$VF=[1,97],$VG=[1,99],$VH=[1,100],$VI=[9,11,24,50,51,52,53,54,55,56,57,58,59,60,61],$VJ=[9,20,24,56,57,58,59,60,61],$VK=[9,11,20,24,50,51,52,53,54,55,56,57,58,59,60,61],$VL=[9,11,50,51,52,53,54,55,56,57,58,59];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INIT":3,"CONSULTAS_XPATH":4,"eof":5,"operador_o":6,"CONSULTA_XPATH":7,"corchete_abierto":8,"corchete_cerrado":9,"parentesis_abierto":10,"parentesis_cerrado":11,"RELATIVA":12,"EXPRESIONES_RUTA":13,"PUNTOS":14,"EXPRESION_RUTA":15,"DIAGONALES":16,"ACCESORES":17,"identificador":18,"OPCIONAL_PREDICADO":19,"diagonal":20,"punto":21,"ID":22,"ATRIBUTO":23,"multiplicacion":24,"NODE":25,"TEXT":26,"text":27,"node":28,"arroba":29,"EJE":30,"EJES":31,"dos_puntos":32,"ACCESORES_EJE":33,"ancestor":34,"ancestor-or-self":35,"attribute":36,"child":37,"descendant":38,"descendant-or-self":39,"following":40,"following-sibling":41,"parent":42,"preceding":43,"preceding-sibling":44,"self":45,"PREDICADOS":46,"PREDICADO":47,"FILTRO":48,"EXPR":49,"igual":50,"diferente":51,"mayor":52,"menor":53,"mayor_igual":54,"menor_igual":55,"and":56,"or":57,"suma":58,"resta":59,"division":60,"mod":61,"TIPOS":62,"string":63,"digito":64,"last":65,"position":66,"$accept":0,"$end":1},
terminals_: {2:"error",5:"eof",6:"operador_o",8:"corchete_abierto",9:"corchete_cerrado",10:"parentesis_abierto",11:"parentesis_cerrado",18:"identificador",20:"diagonal",21:"punto",24:"multiplicacion",27:"text",28:"node",29:"arroba",32:"dos_puntos",34:"ancestor",35:"ancestor-or-self",36:"attribute",37:"child",38:"descendant",39:"descendant-or-self",40:"following",41:"following-sibling",42:"parent",43:"preceding",44:"preceding-sibling",45:"self",50:"igual",51:"diferente",52:"mayor",53:"menor",54:"mayor_igual",55:"menor_igual",56:"and",57:"or",58:"suma",59:"resta",60:"division",61:"mod",63:"string",64:"digito",65:"last",66:"position"},
productions_: [0,[3,2],[3,2],[4,3],[4,1],[4,3],[4,3],[7,1],[7,1],[7,2],[13,2],[13,1],[13,2],[15,3],[15,2],[12,0],[12,2],[16,2],[16,1],[14,1],[14,2],[17,2],[17,2],[17,2],[17,1],[17,1],[17,1],[26,3],[25,3],[23,2],[23,2],[23,2],[22,1],[22,1],[30,4],[33,1],[33,1],[33,1],[33,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,1],[19,0],[19,1],[46,2],[46,1],[46,3],[47,3],[48,3],[48,3],[48,3],[48,3],[48,3],[48,3],[48,3],[48,3],[48,2],[48,1],[49,3],[49,3],[49,3],[49,3],[49,3],[49,3],[49,1],[49,3],[62,1],[62,1],[62,1],[62,1],[62,1],[62,3],[62,3],[62,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        console.log('\n\nexito al analizar');
    
break;
case 2:
        
        errores.agregarError("Sintactico","Errores seguidos"+yytext,this._$.first_line,this._$.first_column);        
    
break;
case 5:

        errores.agregarError("Sintactico","No puede venir un predicado como un nodo\n"+yytext,this._$.first_line,this._$.first_column);
    
break;
case 6:

        errores.agregarError("Sintactico","No puede venir una expresion como un nodo\n"+yytext,this._$.first_line,this._$.first_column);
    
break;
case 7:
consultas.push(new ConsultaSimple($$[$0]));
break;
case 9:
consultas.push($$[$0-1]);
break;
case 12:

        errores.agregarError("Sintactico","Consulta no aceptada:\n"+yytext,this._$.first_line,this._$.first_column);
    
break;
case 13:

            if (!($$[$0-2] === "")) {
                consultas.push(new ConsultaSimple($$[$0-2]));
            }
            consultas.push($$[$0]);
        
break;
case 14:

        errores.agregarError("Sintactico",yytext,this._$.first_line,this._$.first_column);
    
break;
case 15:
this.$ = "";
break;
case 16: case 23:
this.$ = $$[$0-1];
break;
case 19:
this.$ = new ConsultaPunto();
break;
case 20:
this.$ = new ConsultaPuntos();
break;
case 21:
this.$ = new ConsultaSimple($$[$0-1]);
break;
case 55:

        errores.agregarError("Sintactico","Error en predicado\n"+yytext,this._$.first_line,this._$.first_column);
    
break;
case 74:

        errores.agregarError("Sintactico","Error dentro expresion\n"+yytext,this._$.first_line,this._$.first_column);
    
break;
}
},
table: [o($V0,$V1,{3:1,4:2,7:4,12:7,13:8,14:9,15:11,2:[1,3],8:[1,5],10:[1,6],18:$V2,21:$V3}),{1:[3]},{5:[1,13],6:[1,14]},{5:[1,15],6:$V4,18:$V5},o($V6,[2,4]),{2:[1,18]},{2:[1,19]},o($V7,[2,7],{16:20,20:$V8}),o($V7,[2,8],{15:22,12:23,2:$V9,18:$V2,20:$V1}),{2:$Va,12:23,13:25,15:11,18:$V2,20:$V1},o($Vb,$Vc,{19:27,46:28,47:29,8:$Vd}),o($Ve,[2,11]),o($Vf,[2,19],{21:[1,31]}),{1:[2,1]},o($V0,$V1,{12:7,13:8,14:9,15:11,7:32,2:$Va,18:$V2,21:$V3}),{1:[2,2]},o($Ve,[2,12]),o($Ve,[2,14]),{9:[1,33]},{11:[1,34]},{14:38,17:35,18:[1,42],21:$V3,22:36,23:37,24:[1,39],25:40,26:41,27:$Vg,28:$Vh,29:$Vi,30:43,31:47,34:$Vj,35:$Vk,36:$Vl,37:$Vm,38:$Vn,39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt,45:$Vu},o($Vv,[2,18],{20:[1,60]}),o($Ve,[2,10]),{16:20,20:$V8},{18:$V5},o($V7,[2,9],{15:22,12:23,2:$V9,18:$V2,20:$V1}),{6:$V4,18:$V5},o($Vb,[2,16]),o($Ve,[2,52],{47:61,8:[1,62]}),o($Vf,[2,54]),o($Vw,$V1,{12:7,13:8,15:11,31:47,48:64,49:65,30:66,62:68,23:71,14:72,7:73,26:76,2:[1,63],10:$Vx,18:$V2,21:$V3,27:$Vg,29:$Vi,34:$Vj,35:$Vk,36:$Vl,37:$Vm,38:$Vn,39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt,45:$Vu,63:$Vy,64:$Vz,65:$VA,66:$VB}),o($Vf,[2,20]),o($V6,[2,3]),o($V6,[2,5]),o($V6,[2,6]),o($Ve,[2,13]),o($Ve,$Vc,{46:28,47:29,19:77,8:$Vd}),o($Ve,$Vc,{46:28,47:29,19:78,8:$Vd}),o($Ve,$Vc,{46:28,47:29,19:79,8:$Vd}),o($Ve,[2,24]),o($Ve,[2,25]),o($Ve,[2,26]),o($Vf,[2,32]),o($Vf,[2,33]),{18:[1,80],24:[1,81],25:82,28:$Vh},{10:[1,83]},{10:[1,84]},{32:[1,85]},{32:[2,39]},{32:[2,40]},{32:[2,41]},{32:[2,42]},{32:[2,43]},{32:[2,44]},{32:[2,45]},{32:[2,46]},{32:[2,47]},{32:[2,48]},{32:[2,49]},{32:[2,50]},o($Vv,[2,17]),o($Vf,[2,53]),o($Vw,$V1,{12:7,13:8,15:11,31:47,48:64,49:65,30:66,62:68,23:71,14:72,7:73,26:76,2:$Va,10:$Vx,18:$V2,21:$V3,27:$Vg,29:$Vi,34:$Vj,35:$Vk,36:$Vl,37:$Vm,38:$Vn,39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt,45:$Vu,63:$Vy,64:$Vz,65:$VA,66:$VB}),{6:$V4,9:[1,86],18:$V5},{9:[1,87],56:[1,88],57:[1,89]},o($VC,[2,66],{24:$VD,50:[1,90],51:[1,91],52:[1,92],53:[1,93],54:[1,94],55:[1,95],58:$VE,59:$VF,60:$VG,61:$VH}),o($VC,$Vc,{46:28,47:29,19:101,8:$Vd}),o([11,20,24,58,59,60,61],$V1,{12:7,13:8,15:11,62:68,23:71,14:72,7:73,26:76,49:102,2:[1,103],10:$Vx,18:$V2,21:$V3,27:$Vg,29:$Vi,63:$Vy,64:$Vz,65:$VA,66:$VB}),o($VI,[2,73]),o($VI,[2,75]),o($VI,[2,76]),o($VI,[2,77]),o($VI,[2,78],{15:11,12:23,13:25,2:$Va,18:$V2,20:$V1}),o($VI,[2,79]),{10:[1,104]},{10:[1,105]},o($VI,[2,82]),o($Ve,[2,21]),o($Ve,[2,22]),o($Ve,[2,23]),o($Vf,[2,29]),o($Vf,[2,30]),o($Vf,[2,31]),{11:[1,106]},{11:[1,107]},{32:[1,108]},o($Vf,[2,55]),o($Vf,[2,56]),o($Vw,$V1,{12:7,13:8,15:11,31:47,49:65,30:66,62:68,23:71,14:72,7:73,26:76,48:109,2:$Va,10:$Vx,18:$V2,21:$V3,27:$Vg,29:$Vi,34:$Vj,35:$Vk,36:$Vl,37:$Vm,38:$Vn,39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt,45:$Vu,63:$Vy,64:$Vz,65:$VA,66:$VB}),o($Vw,$V1,{12:7,13:8,15:11,31:47,49:65,30:66,62:68,23:71,14:72,7:73,26:76,48:110,2:$Va,10:$Vx,18:$V2,21:$V3,27:$Vg,29:$Vi,34:$Vj,35:$Vk,36:$Vl,37:$Vm,38:$Vn,39:$Vo,40:$Vp,41:$Vq,42:$Vr,43:$Vs,44:$Vt,45:$Vu,63:$Vy,64:$Vz,65:$VA,66:$VB}),o($VJ,$V1,{12:7,13:8,15:11,62:68,23:71,14:72,7:73,26:76,49:111,2:$Va,10:$Vx,18:$V2,21:$V3,27:$Vg,29:$Vi,63:$Vy,64:$Vz,65:$VA,66:$VB}),o($VJ,$V1,{12:7,13:8,15:11,62:68,23:71,14:72,7:73,26:76,49:112,2:$Va,10:$Vx,18:$V2,21:$V3,27:$Vg,29:$Vi,63:$Vy,64:$Vz,65:$VA,66:$VB}),o($VJ,$V1,{12:7,13:8,15:11,62:68,23:71,14:72,7:73,26:76,49:113,2:$Va,10:$Vx,18:$V2,21:$V3,27:$Vg,29:$Vi,63:$Vy,64:$Vz,65:$VA,66:$VB}),o($VJ,$V1,{12:7,13:8,15:11,62:68,23:71,14:72,7:73,26:76,49:114,2:$Va,10:$Vx,18:$V2,21:$V3,27:$Vg,29:$Vi,63:$Vy,64:$Vz,65:$VA,66:$VB}),o($VJ,$V1,{12:7,13:8,15:11,62:68,23:71,14:72,7:73,26:76,49:115,2:$Va,10:$Vx,18:$V2,21:$V3,27:$Vg,29:$Vi,63:$Vy,64:$Vz,65:$VA,66:$VB}),o($VJ,$V1,{12:7,13:8,15:11,62:68,23:71,14:72,7:73,26:76,49:116,2:$Va,10:$Vx,18:$V2,21:$V3,27:$Vg,29:$Vi,63:$Vy,64:$Vz,65:$VA,66:$VB}),o($VK,$V1,{12:7,13:8,15:11,62:68,23:71,14:72,7:73,26:76,49:117,2:$Va,10:$Vx,18:$V2,21:$V3,27:$Vg,29:$Vi,63:$Vy,64:$Vz,65:$VA,66:$VB}),o($VK,$V1,{12:7,13:8,15:11,62:68,23:71,14:72,7:73,26:76,49:118,2:$Va,10:$Vx,18:$V2,21:$V3,27:$Vg,29:$Vi,63:$Vy,64:$Vz,65:$VA,66:$VB}),o($VK,$V1,{12:7,13:8,15:11,62:68,23:71,14:72,7:73,26:76,49:119,2:$Va,10:$Vx,18:$V2,21:$V3,27:$Vg,29:$Vi,63:$Vy,64:$Vz,65:$VA,66:$VB}),o($VK,$V1,{12:7,13:8,15:11,62:68,23:71,14:72,7:73,26:76,49:120,2:$Va,10:$Vx,18:$V2,21:$V3,27:$Vg,29:$Vi,63:$Vy,64:$Vz,65:$VA,66:$VB}),o($VK,$V1,{12:7,13:8,15:11,62:68,23:71,14:72,7:73,26:76,49:121,2:$Va,10:$Vx,18:$V2,21:$V3,27:$Vg,29:$Vi,63:$Vy,64:$Vz,65:$VA,66:$VB}),o($VC,[2,65]),{11:[1,122],24:$VD,58:$VE,59:$VF,60:$VG,61:$VH},{6:$V4,11:[1,123],18:$V5},{11:[1,124]},{11:[1,125]},o($Vf,[2,28]),o($Vf,[2,27]),{18:[1,127],24:[1,130],25:128,26:129,27:$Vg,28:$Vh,33:126},o($VC,[2,63]),o($VC,[2,64]),o($VC,[2,57],{24:$VD,58:$VE,59:$VF,60:$VG,61:$VH}),o($VC,[2,58],{24:$VD,58:$VE,59:$VF,60:$VG,61:$VH}),o($VC,[2,59],{24:$VD,58:$VE,59:$VF,60:$VG,61:$VH}),o($VC,[2,60],{24:$VD,58:$VE,59:$VF,60:$VG,61:$VH}),o($VC,[2,61],{24:$VD,58:$VE,59:$VF,60:$VG,61:$VH}),o($VC,[2,62],{24:$VD,58:$VE,59:$VF,60:$VG,61:$VH}),o($VL,[2,67],{24:$VD,60:$VG,61:$VH}),o($VL,[2,68],{24:$VD,60:$VG,61:$VH}),o($VI,[2,69]),o($VI,[2,70]),o($VI,[2,71]),o($VI,[2,72]),o($VI,[2,74]),o($VI,[2,80]),o($VI,[2,81]),o($Vf,[2,34]),o($Vf,[2,35]),o($Vf,[2,36]),o($Vf,[2,37]),o($Vf,[2,38])],
defaultActions: {13:[2,1],15:[2,2],48:[2,39],49:[2,40],50:[2,41],51:[2,42],52:[2,43],53:[2,44],54:[2,45],55:[2,46],56:[2,47],57:[2,48],58:[2,49],59:[2,50]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

//metodos o atributos 
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/*espacio en blanco*/
break;
case 1:
    //console.log('Detecto diagonal'); 
     return 20; 

break;
case 2:
    //console.log('Detecto punto');
     return 21; 

break;
case 3:
    //console.log('Detecto arroba');
     return 29; 

break;
case 4:
    //console.log('Detecto node');
     return 28; 

break;
case 5:
    //console.log('Detecto text');
     return 27; 

break;
case 6:
    //console.log('Detecto last');
     return 65; 

break;
case 7:
    //console.log('Detecto position');
     return 66; 

break;
case 8:
    //console.log('Detecto ancestor');
     return 34; 

break;
case 9:
    //console.log('Detecto ancestor-or-self');
     return 35; 

break;
case 10:
    //console.log('Detecto attribute');
     return 36; 

break;
case 11:
    //console.log('Detecto child');
     return 37; 

break;
case 12:
    //console.log('Detecto descendant');
     return 38; 

break;
case 13:
    //console.log('Detecto descendant-or-self');
     return 39; 

break;
case 14:
    //console.log('Detecto following');
     return 40; 

break;
case 15:
    //console.log('Detecto following-sibling');
     return 41; 

break;
case 16:
    //console.log('Detecto parent');
     return 42; 

break;
case 17:
    //console.log('Detecto preceding');
     return 43; 

break;
case 18:
    //console.log('Detecto preceding-sibling');
     return 44; 

break;
case 19:
    //console.log('Detecto self');
     return 45;

break;
case 20:
    //console.log('Detecto operador_o');
    return 6;

break;
case 21:
    //console.log('Detecto suma');
    return 58;

break;
case 22:
    //console.log('Detecto resta');
    return 59;

break;
case 23:
    //console.log('Detecto multiplicacion');
    return 24;

break;
case 24:
    //console.log('Detecto division');
    return 60;

break;
case 25:
    //console.log('Detecto igual');
    return 50;

break;
case 26:
    //console.log('Detecto diferente');
    return 51;

break;
case 27:
    //console.log('Detecto menor');
    return 53;

break;
case 28:
    //console.log('Detecto menor_igual');
    return 55;

break;
case 29:
    //console.log('Detecto mayor');
    return 52;

break;
case 30:
    //console.log('Detecto mayor_igual');
    return 54;

break;
case 31:
    //console.log('Detecto or');
    return 57;

break;
case 32:
    //console.log('Detecto and');
    return 56;

break;
case 33:
    // equivalente a %
    //console.log('Detecto mod');
    return 61;

break;
case 34: 
    //console.log('Detecto parentesis_abierto'); 
     return 10; 
    
break;
case 35: 
    //console.log('Detecto parentesis_cerrado'); 
     return 11; 
    
break;
case 36: 
    //console.log('Detecto corchete_abierto');
    return 8; 
    
break;
case 37: 
    //console.log('Detecto corchete_cerrado');
     return 9; 
    
break;
case 38: 
    //console.log('Detecto dos_puntos'); 
     return 32; 
    
break;
case 39: 
    //console.log('Detecto digito'); 
     return 64; 
    
break;
case 40: 
    //console.log('Detecto identificador'); 
     return 18; 
    
break;
case 41:
    //console.log('Salto linea '+yy_.yytext);

break;
case 42:
    //console.log('string '+yy_.yytext);
    return 63;

break;
case 43:return 5;
break;
case 44:     
    //errores.push(['Lexico','dato: '+yy_.yytext,'Linea '+yy_.yylloc.first_line,'columna '+yy_.yylloc.first_column+1]);
    agregarErrorLexico("Lexico",yy_.yytext,yy_.yylloc.first_line,yy_.yylloc.first_column+1);
    //console.log('     error lexico '+yy_.yytext);
    
break;
}
},
rules: [/^(?:\s+)/,/^(?:\/)/,/^(?:\.)/,/^(?:@)/,/^(?:node\b)/,/^(?:text\b)/,/^(?:last\b)/,/^(?:position\b)/,/^(?:ancestor\b)/,/^(?:ancestor-or-self\b)/,/^(?:attribute\b)/,/^(?:child\b)/,/^(?:descendant\b)/,/^(?:descendant-or-self\b)/,/^(?:following\b)/,/^(?:following-sibling\b)/,/^(?:parent\b)/,/^(?:preceding\b)/,/^(?:preceding-sibling\b)/,/^(?:self\b)/,/^(?:\|)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:div\b)/,/^(?:=)/,/^(?:!=)/,/^(?:<)/,/^(?:<=)/,/^(?:>)/,/^(?:>)/,/^(?:or\b)/,/^(?:and\b)/,/^(?:mod\b)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?::)/,/^(?:(0|[1-9][0-9]*)(\.(0|[0-9]*[1-9](0)?))?)/,/^(?:\w+)/,/^(?:&&[^\n]*)/,/^(?:"[^"\""]*")/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = jisonXpaht;
exports.Parser = jisonXpaht.Parser;
exports.parse = function () { return jisonXpaht.parse.apply(jisonXpaht, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}