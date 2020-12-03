var times = [
    [2,3,2],    //XPS
    [2,2,2],    //Inspiron
    [1,2,1],    //Vostro
    [3,3,1]     //Alienware
];
line1_1 = [];
line1_2 = [];
line1_3 = [];

line2_1 = [];
line2_2 = [];
line2_3 = [];

line3_1 = [];
line3_2 = [];
line3_3 = [];

line4_1 = [];
line4_2 = [];
line4_3 = [];

line5_1 = [];
line5_2 = [];
line5_3 = [];

line6_1 = []; 
line6_2 = []; 
line6_3 = []; 

var input  = [ { product : "XPS" , backlog : 100 , sales: 120 , extra : 20}, { product : "Vostro" , backlog : 100 , sales: 120 , extra : 20},
{ product : "Alienware" , backlog : 100 , sales: 120 , extra : 20}, { product : "Inspiron" , backlog : 100 , sales: 120 , extra : 20}]
var times = [
    [2,3,2],    //XPS
    [2,2,2],    //Inspiron
    [1,2,1],    //Vostro
    [3,3,1]     //Alienware
];

var res = [
    {
        line1:{
            step1:[],
            step2:[],
            step3:[]
        },        
        line2:{
            step1:[],
            step2:[],
            step3:[]
        },       
        line3:{
            step1:[],
            step2:[],
            step3:[]
        },       
        line4:{
            step1:[],
            step2:[],
            step3:[]
        },       
        line5:{
            step1:[],
            step2:[],
            step3:[]
        },       
        line6:{
            step1:[],
            step2:[],
            step3:[]
        }
    }
];
var lines = 6

//------------------------------------------------------------------------------------------------------------------
const optimize = (input) => {
    console.log(input)
    var i = 0;
    for( i = 0; i<48*7; i++){
        res.line1.step1[i] = 0;
        res.line1.step2[i] = 0;
        res.line1.step3[i] = 0;

        res.line2.step1[i] = 0;
        res.line2.step2[i] = 0;
        res.line2.step3[i] = 0;

        res.line3.step1[i] = 0;
        res.line3.step2[i] = 0;
        res.line3.step3[i] = 0;

        res.line4.step1[i] = 0;
        res.line4.step2[i] = 0;
        res.line4.step3[i] = 0;

        res.line5.step1[i] = 0;
        res.line5.step2[i] = 0;
        res.line5.step3[i] = 0;

        res.line6.step1[i] = 0;
        res.line6.step2[i] = 0;
        res.line6.step3[i] = 0;
    }
    
    var current = input
    
}

optimize(input)
