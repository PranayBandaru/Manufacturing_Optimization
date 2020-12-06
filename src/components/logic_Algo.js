var input1  = [ { product : "XPS" , backlog : 0 , sales: 0, extra : 0},
                { product : "Vostro" , backlog : 0 , sales: 0 , extra : 0},
                { product : "GSeries" , backlog : 0 , sales: 0 , extra :0}, 
                { product : "Inspiron" , backlog : 0 , sales: 0 , extra : 0}]


var times = {
    XPS:[2,3,2],    //XPS
    Inspiron: [2,2,2],    //Inspiron
    Vostro: [1,2,1],    //Vostro
    GSeries: [3,3,1]     //GSeries
};

var n_lines = 6;

const initialise = (arr)=> {
    for(var i=0 ; i<336;i++){
        arr[i] = 0;
    }
    return arr; 
}


//console.log(input)

var line_1 = {step1 : initialise(new Array(336)),step2 : initialise(new Array(336)), step3 : initialise(new Array(336)) }
var line_2 = {step1 : initialise(new Array(336)),step2 : initialise(new Array(336)), step3 : initialise(new Array(336)) }
var line_3 = {step1 : initialise(new Array(336)),step2 : initialise(new Array(336)), step3 : initialise(new Array(336)) }
var line_4 = {step1 : initialise(new Array(336)),step2 : initialise(new Array(336)), step3 : initialise(new Array(336)) }
var line_5 = {step1 : initialise(new Array(336)),step2 : initialise(new Array(336)), step3 : initialise(new Array(336)) }
var line_6 = {step1 : initialise(new Array(336)),step2 : initialise(new Array(336)), step3 : initialise(new Array(336)) }

var lines = [line_1, line_2, line_3, line_4, line_5, line_6];

// console.log(line_4.step2[50]);
var backlogs = [];
var sales = [];
var extra = [];

//-----------------------------------------------FIRST INDEX--------------------------------------------------
function first_index(lines, step_no, min){
    //console.log(lines);
    var min_index = 336;
    var min_line_no;
    step_no = String("step"+step_no);
    for(var i = 0; i<lines.length; i++){
        for(var k =min; k<336; k++){
            if(lines[i][step_no][k] == 0 && k < min_index && ((k+1) %16 != 0 ) && ((k) %16 != 0 ) && ((k-1) %16 != 0 )){
                min_index = k;
                min_line_no = i+1;
                break;
            }
        }
    }
    return([min_index, min_line_no]);
}

//-----------------------------------------------OPTIMIZE--------------------------------------------------
export const optimize = (input) => {
    console.log("---------------------||||||||||||||||||||||||-------------------------------------------");
    console.log(input);
    var temp_swap;
    var loc;
    for(var i=0;i<4;i++){
        backlogs.push({product :input[i].product , backlog:  input[i].backlog})
    }for(var i=0;i<4;i++){
        sales.push({product :input[i].product , sales:  input[i].sales })
    }for(var i=0;i<4;i++){
        extra.push({product :input[i].product , extra:  input[i].extra })
    }
    //console.log(backlogs);
    //----------------------------------------------SORT----------------------------------------------------------
    for(var i =0; i<3;i++){
        for(var j = 0; j<3;j++){
            if(backlogs[j].backlog < backlogs[j+1].backlog){
                temp_swap = backlogs[j].backlog;
                backlogs[j].backlog = backlogs[j+1].backlog;
                backlogs[j+1].backlog = temp_swap;

                temp_swap = backlogs[j].product;
                backlogs[j].product = backlogs[j+1].product;
                backlogs[j+1].product = temp_swap;
            }
        }
    }

    for(var i =0; i<3;i++){
        for(var j = 0; j<3;j++){
            if(sales[j].sales < sales[j+1].sales){
                temp_swap = sales[j].sales;
                sales[j].sales = sales[j+1].sales;
                sales[j+1].sales = temp_swap;

                temp_swap = sales[j].product;
                sales[j].product = sales[j+1].product;
                sales[j+1].product = temp_swap;
            }
        }
    }

    for(var i =0; i<3;i++){
        for(var j = 0; j<3;j++){
            if(extra[j].extra < extra[j+1].extra){
                temp_swap = extra[j].extra;
                extra[j].extra = extra[j+1].extra;
                extra[j+1].extra = temp_swap;

                temp_swap = extra[j].product;
                extra[j].product = extra[j+1].product;
                extra[j+1].product = temp_swap;
            }
        }
    }
    //----------------------------------------------SORT END----------------------------------------------------------
    //console.log(backlogs);
    //console.log(times[p_name][0]);
    var step_complete = {step1: 0,step2: 0,step3: 0};
    var step_ends = {step1: 0,step2: 0,step3: 0};
    //---------------------------------------------BACKLOGS-----------------------------------------------------------
    for(var lv = 0; lv<4; lv++){
        var p1_backlogs = backlogs[lv].backlog;
        var p_name = backlogs[lv].product;
        for(var i = 0; i<(backlogs[lv].backlog); i++){
            if(p1_backlogs>0){
                loc = first_index(lines,1,0);
                for(var t = 0; t<times[p_name][0]; t++){
                    if((loc[0]+t+1)%16 == 0){
                        loc[0] = loc[0] + t+1;
                    }
                }
                for(var j =0; j< times[p_name][0]; j++){
                    lines[loc[1]-1].step1[loc[0]+j]  = backlogs[lv].product;
                    step_ends.step1 =loc[0]+j+1;
                }
                p1_backlogs--;
                step_complete.step1++;
            }
            if(step_complete.step1>0){
                loc = first_index(lines,2,step_ends.step1);
                for(var t = 0; t<times[p_name][1]; t++){
                    if((loc[0]+t+1)%16 == 0){
                        loc[0] = loc[0] + t+1;
                    }
                }
                for(var j =0; j< times[p_name][1]; j++){
                    lines[loc[1]-1].step2[loc[0]+j]  = backlogs[lv].product;
                    step_ends.step2 = loc[0]+j+1;
                }
                step_complete.step1--;
                step_complete.step2++;
            }
            if(step_complete.step2>0){
                loc = first_index(lines,3,step_ends.step2);
                for(var t = 0; t<times[p_name][2]; t++){
                    if((loc[0]+t+1)%16 == 0){
                        loc[0] = loc[0] + t+1;
                    }
                }
                for(var j =0; j< times[p_name][2]; j++){
                    lines[loc[1]-1].step3[loc[0]+j]  = backlogs[lv].product;
                    step_ends.step3 = loc[0]+j+1;
                }
                step_complete.step2--;
                step_complete.step3++;
                //console.log(lines[loc[1]].step1[loc[0]] );
            }
        }
    }   
    //---------------------------------------------SALES-----------------------------------------------------------
    
    for(var lv = 0; lv<4; lv++){
        var p1_sales = sales[lv].sales;
        var p_name = sales[lv].product;
        for(var i = 0; i<(sales[lv].sales); i++){

            if(p1_sales>0){
                loc = first_index(lines,1,0);
                for(var t = 0; t<times[p_name][0]; t++){
                    if((loc[0]+t+1)%16 == 0){
                        loc[0] = loc[0] + t+1;
                    }
                }
                for(var j =0; j< times[p_name][0]; j++){
                    lines[loc[1]-1].step1[loc[0]+j]  = sales[lv].product;
                    step_ends.step1 = loc[0] + j+ 1;
                }
                p1_sales--;
                step_complete.step1++;
            }
            if(step_complete.step1>0){
                loc = first_index(lines,2,step_ends.step1);
                for(var t = 0; t<times[p_name][1]; t++){
                    if((loc[0]+t+1)%16 == 0){
                        loc[0] = loc[0] + t+1;
                    }
                }
                for(var j =0; j< times[p_name][1]; j++){
                    //console.log(loc);
                    //console.log(step_ends.step2);
                    lines[loc[1]-1].step2[loc[0]+j]  = sales[lv].product;
                    step_ends.step2 = loc[0] + j+ 1;
                }
                step_complete.step1--;
                step_complete.step2++;
            }
            if(step_complete.step2>0){
                loc = first_index(lines,3,step_ends.step2);
                for(var t = 0; t<times[p_name][2]; t++){
                    if((loc[0]+t+1)%16 == 0){
                        loc[0] = loc[0] + t+1;
                    }
                }
                for(var j =0; j< times[p_name][2]; j++){
                    lines[loc[1]-1].step3[loc[0]+j]  = sales[lv].product;
                    step_ends.step3 = loc[0] + j+ 1;
                }
                step_complete.step2--;
                step_complete.step3++;
                //console.log(lines[loc[1]].step1[loc[0]] );
            }
        }
    }
    
    //---------------------------------------------------EXTRA-----------------------------------------------------------
    for(var lv = 0; lv<4; lv++){
        var p1_extra = extra[lv].extra;
        var p_name = extra[lv].product;
        for(var i = 0; i<(extra[lv].extra); i++){
            if(p1_extra>0){
                loc = first_index(lines,1,0);
                for(var t = 0; t<times[p_name][0]; t++){
                    if((loc[0]+t+1)%16 == 0){
                        loc[0] = loc[0] + t+1;
                    }
                }
                for(var j =0; j< times[p_name][0]; j++){
                    lines[loc[1]-1].step1[loc[0]+j]  = extra[lv].product;
                    step_ends.step1 =loc[0]+j+1;
                }
                p1_extra--;
                step_complete.step1++;
            }
            if(step_complete.step1>0){
                loc = first_index(lines,2,step_ends.step1);
                for(var t = 0; t<times[p_name][1]; t++){
                    if((loc[0]+t+1)%16 == 0){
                        loc[0] = loc[0] + t+1;
                    }
                }
                for(var j =0; j< times[p_name][1]; j++){
                    lines[loc[1]-1].step2[loc[0]+j]  = extra[lv].product;
                    step_ends.step2 = loc[0]+j+1;
                }
                step_complete.step1--;
                step_complete.step2++;
            }
            if(step_complete.step2>0){
                loc = first_index(lines,3,step_ends.step2);

                for(var t = 0; t<times[p_name][2]; t++){
                    if((loc[0]+t+1)%16 == 0){
                        loc[0] = loc[0] + t+1;
                    }
                }
                for(var j =0; j< times[p_name][2]; j++){
                    lines[loc[1]-1].step3[loc[0]+j]  = extra[lv].product;
                    step_ends.step3 = loc[0]+j+1;
                }
                step_complete.step2--;
                step_complete.step3++;
                //console.log(lines[loc[1]].step1[loc[0]] );
            }
        }
    }   
    
    
        
    //step_complete_temp = (step_complete.step1/6+1)*times[p_name][0]; 

    /*
    console.log(step_complete);
    for(var i = 0; i< step_complete_temp; i++){
        for(var j = 0; j<6 && step_complete.step1>0; j++){
            
            for(var k =0; k<times[p_name][0]; k++){
                lines[j].step1[i+k] = backlogs[0].product ;
            }
            step_complete.step1--;
            step_complete.step2++;
        }
    }
    */
   
//step_complete_temp = (step_complete.step1/6+1)*times[p_name][0]; 


    console.log(lines);
    //console.log(lines[1].step1[250])
    //console.log(first_index(lines,1));
    return(lines);



}



// bubble_Sort(backlogs)