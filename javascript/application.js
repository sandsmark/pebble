var globalComponent = null;
var globalDialogVisible = false;

function getDropOffset(compObject)
{
        var x = 0;
        var y = 0;
        var package = compObject.package;
        var size    = compObject.compSize;
        var orient  = compObject.orientation;
        var design  = compObject.designator;

        switch(compObject.compType)
        {
                case "Resistor" :
                        if(orient == 1)
                        {
                                x = 1;
                                y = -6 -size;
                        }
                        else
                        {
                                x = -6 -size;
                                y = 2;
                        }
                        break;

                case "IC" :
                        x = -10;
                        y = 0;
	      		
			if(package ==  "AXE200")
	       		{
				y = -10;
	       		}
	       		if(package ==  "LVC74245" || package == "AMIS30622")
	       		{
				x = -25
				y = -25;
			}
			if(package ==  "LV8549MC")
	       		{
				x = -15
				y = -12;
			}
			if(package ==  "Inch7seg")
	       		{
				x = -71
			}
			if(package ==  "Dual7seg")
	       		{
				x = -131
			}
			if(package ==  "Quad7seg")
	       		{
			x = -79
	       		}
                        break;

                case "LED" :
                        switch("" + orient)
                        {
                        case "1" :
                        case "3" :
                                x = -1;
                                y = -14;
                                break;
                        case "2" :
                        case "4" :
                                x = -14;
                                y = -1;
                                break;
                        }
                        break;

                case "Transistor" :
                        switch("" + orient)
                        {
                        case "1" :
                                x = -1;
                                y = -2;
                                break;
                        case "2" :
                                x = -1;
                                y = -20;
                                break;
                        case "3" :
                                y = 0;
                                if(package == 1)
                                {
                                        x = -7;
                                }
                                else
                                {
                                        x = -15;
                                }
                                break;
                        case "4" :
                                y = 0;
                                x = 1;
                                break;
                        case "5" :
                                y = 0;
				if(package == 1)
                                {
                                        x = -23;
                                }
                                else
                                {
                                        x = -21;
                                }
                                break;
                        case "6" :
                                y = 0;
				if(package == 1)
                                {
                                        x = -2;
                                }
                                else
                                {
                                        x = 0;
                                }
                                break;
                        }
                        break;


                case "Diode" :
                        switch("" + orient)
                        {
                        case "1" :
                                x = 0;
                                y = -7;
                                break;
                        case "3" :
                                y = -7;
                                if(size == 0)
                                {
                                        x = -3;
                                }
                                else
                                {
                                        x = 0;
                                }
                                break;
                        case "2" :
                                x = -7;
                                y = 1;
                                break;
                        case "4" :
                                x = -7;
                                if(size == 0)
                                {
                                        y = -2;
                                }
                                else
                                {
                                        y = 1;
                                }
                                break;
                        }
                        break;

                case "Capacitor" :
                        switch("" + orient)
                        {
                        case "1" :
                        case "3" :
                                x = 0;
                                if(package == 1)
                                {
                                        y = -13;
                                }
                                if(package == 2)
                                {
                                        y = -15 -(2 * size);
                                }
                                if(package == 3)
                                {
                                        y = 2 -(11 * size);
                                }
                                if(package == 4)
                                {
                                        y = -8 -(2 * size);
                                }
                                if(package == 5)
                                {
                                        y = -5 -(2 * size);
                                }

                                break;

                        case "2" :
                        case "4" :
                                y = 1;
                                if(package == 1)
                                {
                                        x = -13;
                                }
                                if(package == 2)
                                {
                                        x = -15 -(2 * size);
                                }
                                if(package == 3)
                                {
                                        x = -(11 * size);
                                }
                                if(package == 4)
                                {
                                        x = -6 -(2 * size);
                                }
                                if(package == 5)
                                {
                                        x = -4 -(2 * size);
                                }
                                break;
                        }
                        break;

                case "Wire" :

                        var tempry = orient;
                        var orient = tempry / 10;
                        var orient = parseInt(orient);
                        var offset = tempry -(orient * 10);
                        var wend1 = package / 10;
                        var wend1 = parseInt( wend1);
                        var wend2 = package -(wend1 * 10);
                        var tempry = design;
                        var woff1 = tempry / 10;
                        var woff1 = parseInt( woff1);
                        var woff2 = tempry -(woff1 * 10);

                        switch("" + orient)
                        {
                        case "1" :
                                x = -1;
                                switch("" + offset)
                                {
                                case "1" :
                                        y = -3;
                                        if(wend1 == 2 || wend2 == 2)
                                        {
                                                y = -9;
                                        }
                                        break;
                                case "2" :
                                        y = -12;
                                        if(wend1 == 2 || wend2 == 2)
                                        {
                                                y = -18;
                                        }
                                        break;
                                case "3" :
                                        y = 0;
                                        break;
                                }
                                if(wend1 != 1)
                                {
                                        x = x -2 -((2 -woff1) * 9);
                                }
                                break;

                        case "2" :
                                y = -1;
                                switch("" + offset)
                                {
                                case "1" :
                                        x = -3;
                                        if(wend1 == 2 || wend2 == 2)
                                        {
                                                x = -9;
                                        }
                                        else if(wend1 == 4 || wend2 == 4)
                                        {
                                                x = -4;
                                        }
                                        break;
                                case "2" :
                                        x = -13;
                                        if(wend1 == 2 || wend2 == 2)
                                        {
                                                x = -18;
                                        }
                                        break;
                                case "3" :
                                        x = 5;
                                        if(wend1 < 3 || wend2 < 3)
                                        {
                                                x = 0;
                                        }
                                        break;
                                }
                                if(wend1 != 1)
                                {
                                        y = y -2 -((2 -woff1) * 9);
                                }
                                break;
                        }
                        break;


                case "Switch" :
                        switch("" + orient)
                        {
                        case "1" :
                                y = -5;
                                if(package == 1)
                                {
                                        x = -119;
                                }
                                if(package == 2)
                                {
                                        x = -154;
                                }
                                if(package == 3)
                                {
                                        x = -154;
                                }
                                break;

                        case "2" :
                                if(package == 1)
                                {
                                        x = -11;
                                        y = -121;
                                }
                                if(package == 2)
                                {
                                        x = -7;
                                        y = -148;
                                }
                                if(package == 3)
                                {
                                        x = -6;
                                        y = -147;
                                }
                                break;

                        case "3" :
                                x = -3;
                                y = -5;
                                break;


                        case "4" :
                                if(package == 1)
                                {
                                        x = -11;
                                        y = -5;
                                }
                                if(package == 2)
                                {
                                        x = -7;
                                        y = -5;
                                }
                                if(package == 3)
                                {
                                        x = -6;
                                        y = -5;
                                }
                                break;
                        }
                        break;


                case "Terminal" :
                        switch("" + orient)
                        {
                        case "1" :
                                if(package == 1)
                                {
                                        x = -15;
                                        y = -28;
                                }
                                if(package == 2)
                                {
                                        x = -27;
                                        y = -38;
                                }
                                if(package == 3)
                                {
                                        x = -12;
                                        y = -12;
                                }
                                if(package == 4)
                                {
                                        x = -12;
                                        y = -12;
                                }
                                if(package == 5)
                                {
                                        x = -12;
                                        y = -12;
                                }
                                if(package == 6)
                                {
                                        x = -28;
                                        y = -12;
                                }
                                if(package == 7)
                                {
                                        x = -39;
                                        y = -16;
                                }
                                if(package == 8)
                                {
                                        x = -39;
                                        y = -16;
                                }
                                if(package == 9)
                                {
                                        x = -21;
                                        y = -7;
                                }
                                if(package == 10)
                                {
                                        x = -17;
                                        y = -11;
                                }
                                if(package == 11)
                                {
                                        x = -19;
                                        y = -9;
                                }
                                if(package == 12) // Spring Terminals 2.54mm centres
                                {
                                        x = -39;
                                        y = -19;
                                }
                                if(package == 13) // Left facing prog socket
                                {
                                        x = -65;
                                        y = -15;
                                }
                                if(package == 14) // Vertical IDC 2-row boxed header
                                {
                                        x = -50;
                                        y = -19;
                                }
                                if(package == 15) // Spring Terminals 5.0mm centres
                                {
                                        x = -20;
                                        y = -27;
                                }
                                if(package == 16) // Prog Socket for Strip/Proto Boards
                                {
                                        x = -9;
                                        y = -70;
                                }
                                break;

                        case "2" :
                                if(package == 1)
                                {
                                        x = -15;
                                        y = -65;
                                }
                                if(package == 2)
                                {
                                        x = -28;
                                        y = -48;
                                }
                                if(package == 3)
                                {
                                        x = -13;
                                        y = -32;

                                }
                                if(package == 4)
                                {
                                        x = -14;
                                        y = -32;
                                }
                                if(package == 5)
                                {
                                        x = -13;
                                        y = -32;
                                }
                                if(package == 6)
                                {
                                        x = -28;
                                        y = -175;
                                }
                                if(package == 7)
                                {
                                        x = -34;
                                        y = -293;
                                }
                                if(package == 8)
                                {
                                        x = -34;
                                        y = -293;
                                }
                                if(package == 9)
                                {
                                        x = -20;
                                        y = -278;
                                }
                                if(package == 10)
                                {
                                        x = -17;
                                        y = -134;
                                }
                                if(package == 11)
                                {
                                        x = -15;
                                        y = -118;
                                }

                                if(package == 12)  // Spring Terminals 2.54mm centres
                                {
                                        x = -14;
                                        y = -60;
                                }
                                if(package == 13)  // Right facing Prog Socket
                                {
                                        x = -28;
                                        y = -15;
                                }
                                if(package == 14) // Vertical IDC 2-row boxed header
                                {
                                        x = -50;
                                        y = -19;
                                }
                                if(package == 15) // Spring Terminals 5.0mm centres
                                {
                                        x = -38;
                                        y = -53;
                                }
                                if(package == 16) // Prog Socket for Strip/Proto Boards
                                {
                                        x = -9;
                                        y = -70;
                                }
                                break;
                        }
                        break;


                case "DIPSw" :
                        x = -12;
                        y = -2;
                        if(size == 10)
                        {
                        	x = -10;
                        	y = -1;
                        }
                        if(size == 11)
                        {
                        x = -31;
                        y = -2;
                        }
                        break;


                case "Miscell" :
                        switch("" + package)
                        {
                        case "1" :
                                x = 0;
                                y = -25;
                                break;
                        case "2" :
                       case "42" :
                                x = 0;
                                y = -13;
                                break;
                        case "3" :
                                x = 0;
                                y = -2;
                                break;
                        case "4" :
                                x = 0;
                                y = -9;
                                break;
                        case "5" :
                                x = -67;
                                y = -5;
                                break;
                        case "6" :
                                x = -49
                                y = -6;
                                break;
                        case "7" :
                                x = -72;
                                y = -5;
                                break;
                        case "8" :
                                x = -38;
                                y = -5;
                                break;
                        case "9" :
                        case "10" :
                        case "11" :
                        case "12" :
                        case "13" :
                        case "14" :
                        case "15" :
                        case "16" :
                                x = -4;
                                y = -5;
                                break;
                        case "17" :
                        case "18" :
                        case "31" :
                                x = -3;
                                y = -6;
                                break;
                        case "19" :
                                x = -129;
                                y = -5;
                                break;
                        case "20" :
                                x = -21;
                                y = -5;
                                break;
                        case "21" :
                                x = -3;
                                y = -5;
                                break;
                        case "22" :
                                x = -45
                                y = -4;
                                break;
                        case "23" :
                                x = -60;
                                y = -4;
                                break;
                        case "24" :
                                x = -130;
                                y = -17;
                                break;
                        case "25" :
                                x = -18;
                                y = 0;
                                break;
                        case "26" :
                                x = -24;
                                y = -27;
                                break;
                        case "27" :
                                x = -35;
                                y = -5;
                                break;
                        case "28" :
                                x = -43;
                                y = -5;
                                break;
                        case "29" :
                        case "30" :
                        case "32" :
                        case "33" :
                                x = -13;
                                y = -12;
                                break;
                        case "34" :
                                x = -11;
                                y = -7;
                                break;
                        case "35" :
                                x = -6;
                                y = -11;
                                break;
                        case "36" :
                        case "43" :
                                x = -8;
                                y = -8;
                                break;
                        case "37" :
                                x = -105;
                                y = -5;
                                break;
                        case "38" :
                                x = -94;
                                y = -5;
                                break;
                        case "39" :
                                x = -202;
                                y = -5;
                                break;
                        case "40" :
                                x = -88;
                                y = -5;
                                break;
                        case "41" :
                                x = -58;
                                y = -5;
                                break;
                        case "44" :
                                x = -50;
                                y = -13;
                                break;
                        case "45" :
                                x = -1;
                                y = -63
                                break;
                        case "46" :
                                x = -64
                                y = -1;
                                break;
                        }
                        break;

                case "FourD" :
// may need to consider two sets of conditions (a) on DEVBOARD G1 and (b) on standard breadboards
                        switch("" + package)
                        {
                        case "1" :
                                x = -17;
                                y = -0;
                                break;
                        case "2" :
                                x = -47;
                                y = -5;
                                break;
                        case "3" :
                                x = -15;
                                y = -11;
                                break;
                        case "4" :
                                x = -118;
                                y = -5;
                                break;
                        case "5" :
                                x = -5;
                                y = -10;
                                break;
                        case "6" :
                                x = -118;
                                y = -5;
                                break;
                        case "7" :
                                x = -29;
                                y = -354;
                                break;
                        case "8" :
                                x = -196;
                                y = 2;
                                break;
                        case "9" :
                                x = -11;
                                y = -26;
                                break;
                        case "10" :
                                x = -30;
                                y = -10;
                                break;
                        case "11" :
                                x = -25;
                                y = -25;
                                break;
                        case "12" :
                                x = -9;
                                y = 6;
                                break;
                        case "13" :
                                x = -23;
                                y = -13;
                                break;
                        case "14" :
                                x = -129;
                                y = -35;
                                break;
                        case "15" :
                                x = -35;
                                y = -104;
                                break;
                        case "16" :
                                x = -0;
                                y = -0;
                                break; 
                        }
                        break;


// New Aug2016 - This device group is for Prototyping and stripboard cuts, etc
                case "ProtoBrd" :
                        switch("" + package)
                        {
                        case "1" :
                                x = -9;
                                y = 10;
                                break;
                        case "2" :
                                x = -8;
                                y = -8;
                                break; 
                        case "3" :
                                x = -9;
                                y = -9;
                                break; 
                        case "4" :
                                x = -16;
                                y = -16;
                                break; 
                        case "5" :
                        case "7" :	
                                x = -1;
                                y = -1;
                                break; 
                        case "6" :	
                                x = -1;
                                y = -0;
                                break;
                        case "9" :
                        case "10" :
                        case "11" :
                                x = -2;
                                y = -1;
                                break; 
                        case "12" :
                                x = -1;
                                y = -23;
                                break; 
                        case "13" :
                                x = -24;
                                y = -1;
                                break; 
                        case "14" :
                                x = -12;
                                y = -10;
                                break;
                        case "15" :
                                x = -12;
                                y = -10;
                                break;
                        }
                        break;


// New Sept2016 - This device group is for Prototyping and stripboard wires
                case "Wlinks" :
			    switch("" + package)
			    {
			      case "1" :        // for bare tinned wires
				switch("" + orient)
                        	{
                        	case "11" : 
                        	case "12" : 
                        	case "13" :                              
                                    x = -1;
				    y = -28;
				    break;
                        	case "14" :  
                        	case "29" :                              
                                    x = -1;
				    y = -14;
				    break;
                        	case "15" :
                        	case "16" :  
                        	case "17" : 
                        	case "18" : 
                        	case "19" :                              
                                    x = -1;
				    y = -1;
				    break;
                        	case "20" : 
                        	case "27" :                               
                                    x = -14;
				    y = -1;
				    break;
                        	case "21" :  
                        	case "22" :  
                        	case "23" :                            
                                    x = -28;
				    y = -1;
				    break;
                        	case "24" :                                
                                    x = -28;
				    y = -14;
				    break;
                        	case "25" :                                
                                    x = -28;
				    y = -28;
				    break;
                        	case "26" :                                
                                    x = -14;
				    y = -28
				    break;
                        	case "28" :                                
                                    x = 13;
				    y = -1;
				    break;
                        	case "30" :                                
                                    x = -1;
				    y = 13;
				    break;
                        	case "31" :                                
                                    x = 0;
				    y = 1;
				    break;
                        	case "32" :                                
                                    x = 12
				    y = 1;
				    break;
                        	case "33" :                                
                                    x = 0;
				    y = 12;
				    break;
                        	case "34" :                                
                                    x = 12;
				    y = 12;
				    break;
                                }
				break;
			    case "2" :		// for insulated wires with both ends bare
			    case "3" :          // for insulated wires with primary end bare 
                                switch("" + orient)
                        	{
                        	case "11" :                                
                                    x = -2;
				    y = -28;
				    break;
                        	case "12" : 
                        	case "13" :                               
                                    x = -1;
				    y = -28
				    break;
                        	case "14" :                                
                                    x = -1;
				    y = -15;
				    break;
                        	case "15" :                                
                                    x = -1;
				    y = -2;
				    break;
                        	case "16" :  
                        	case "17" : 
                        	case "18" :                             
                                    x = -1;
				    y = -1;
				    break;
                        	case "19" :                                
                                    x = -2;
				    y = -1;
				    break;
                        	case "20" :                                
                                    x = -15;
				    y = -2;
				    break;
                        	case "21" : 
                        	case "22" :                                
                                    x = -28;
				    y = -1;
				    break;
                        	case "23" :                                
                                    x = -28;
				    y = -2;
				    break;
                        	case "24" :                                
                                    x = -28;
				    y = -15;
				    break;
                        	case "25" :                                
                                    x = -28;
				    y = -28;
				    break;
                        	case "26" :                                
                                    x = -15;
				    y = -28
				    break;
                        	case "27" :                                
                                    x = -15;
				    y = -1;
				    break;
                        	case "28" :                                
                                    x = 12;
				    y = -2;
				    break;
                        	case "29" :                                
                                    x = -2;
				    y = -15
				    break;
                        	case "30" :                                
                                    x = -3;
				    y = 12;
				    break;
                        	case "31" :                                
                                    x = 0;
				    y = 1;
				    break;
                        	case "32" :                                
                                    x = 12
				    y = 1;
				    break;
                        	case "33" :                                
                                    x = 0;
				    y = 12;
				    break;
                        	case "34" :                                
                                    x = 12;
				    y = 12;
				    break;
                                }
				break;
			      case "4" :        // for bare tinned wires over spotface
				switch("" + orient)
                        	{
                        	case "11" :                                
                                    x = -9;
				    y = -28;
				    break;
                        	case "12" :                                
                                    x = -9;
				    y = -28
				    break;
                        	case "13" :                                
                                    x = -9;
				    y = -28;
				    break;
                        	case "14" :                                
                                    x = -9;
				    y = -14;
				    break;
                        	case "15" :                                
                                    x = -9;
				    y = -9;
				    break;
                        	case "16" :                                
                                    x = -9;
				    y = -9;
				    break;
                        	case "17" :                                
                                    x = -9;
				    y = -9;
				    break;
                        	case "18" :                                
                                    x = -9;
				    y = -9;
				    break;
                        	case "19" :                                
                                    x = -9;
				    y = -9;
				    break;
                        	case "20" :                                
                                    x = -14;
				    y = -9;
				    break;
                        	case "21" :                                
                                    x = -28;
				    y = -9;
				    break;
                        	case "22" :                                
                                    x = -28;
				    y = -9;
				    break;
                        	case "23" :                                
                                    x = -28;
				    y = -9;
				    break;
                        	case "24" :                                
                                    x = -28;
				    y = -14;
				    break;
                        	case "25" :                                
                                    x = -28;
				    y = -28;
				    break;
                        	case "26" :                                
                                    x = -14;
				    y = -28
				    break;
                        	case "27" :                                
                                    x = -14;
				    y = -1;
				    break;
                        	case "28" :                                
                                    x = 13;
				    y = -1;
				    break;
                        	case "29" :                                
                                    x = -1;
				    y = -14
				    break;
                        	case "30" :                                
                                    x = -1;
				    y = 15;
				    break;
                        	case "31" :                                
                                    x = 0;
				    y = 1;
				    break;
                        	case "32" :                                
                                    x = 12
				    y = 1;
				    break;
                        	case "33" :                                
                                    x = 0;
				    y = 12;
				    break;
                        	case "34" :                                
                                    x = 12;
				    y = 12;
				    break;
                                }
				break;
			      case "5" :        // for insulated wires over spotface
				switch("" + orient)
                        	{
                        	case "11" : 
                        	case "12" :   
                        	case "13" :                            
                                    x = -9;
				    y = -28;
				    break;
                        	case "14" :                                
                                    x = -9;
				    y = -14;
				    break;
                        	case "15" : 
                        	case "16" : 
                        	case "17" :    
                        	case "18" :  
                        	case "19" :                           
                                    x = -9;
				    y = -9;
				    break;
                        	case "20" :                                
                                    x = -15;
				    y = -9;
				    break;
                        	case "21" :    
                        	case "22" :  
                        	case "23" :                          
                                    x = -28;
				    y = -9;
				    break;
                        	case "24" :                                
                                    x = -28;
				    y = -14;
				    break;
                        	case "25" :                                
                                    x = -28;
				    y = -28;
				    break;
                        	case "26" :                                
                                    x = -15;
				    y = -28
				    break;
                        	case "27" :                                
                                    x = -15;
				    y = -1;
				    break;
                        	case "28" :                                
                                    x = 12;
				    y = -1;
				    break;
                        	case "29" :                                
                                    x = -1;
				    y = -14
				    break;
                        	case "30" :                                
                                    x = -1;
				    y = 15;
				    break;
                        	case "31" :                                
                                    x = 0;
				    y = 3;
				    break;
                        	case "32" :                                
                                    x = 12
				    y = 1;
				    break;
                        	case "33" :                                
                                    x = 0;
				    y = 12;
				    break;
                        	case "34" :                                
                                    x = 12;
				    y = 12;
				    break;
                                }
				break;
			    }
                            break;


// - - - - - - - - - - - - - - -

                case "Note" :
                        x = 0;
                        y = 0;
                        break;

                case "Slider" :
                        x = 0;
                        y = 0;
                        break;


        }
        return new Point(x, y);
}


function loadCircuit(circuitCode, isFirstLoad)
{
    if (!isFirstLoad) {
        hideAllDialogs();
        var okToClear = false;

        if(globalBreadBoard.getComponentList().length > 0)
        {
            if( ! confirm("Continuing will clear the current breadboard. Continue?"))
            {
                return;
            }
            okToClear = true;
        }

        clearBreadBoard( ! okToClear);
    }

        var stateDisplay = document.getElementById('stateDisplay');

        var lines = circuitCode.split("\n");
        var bbtype = "BB1";
	var toparea = false;
	var oldcircuit = true;

        for(var i = 0; i < lines.length; ++ i)
        {
                if(lines[i].length > 10 && lines[i].indexOf("BREADBOARDSTYLE") == -1 && lines[i].indexOf("SHOWTHETOPAREA") == -1)
                {
                        var parts = lines[i].split("|");

			if(parts[0] == "Wire")
			{
				if(parts[11] == "")	  // plus make all wires standard level for backward compatability
				{
					parts[11] = 10;   // set all wires without a level to the standard level (= 10)
				}
			}


                        var newComp = new BBComponent(parts[0], parts[1], parts[2], parts[3], parts[4], parts[5],
                        parts[6], parts[7], parts[8], parts[9], parts[10], parts[11], parts[12]);
                        createComponent(newComp);
                }
                else if(lines[i].indexOf("BREADBOARDSTYLE") > -1)
                {
                        var tmp = lines[i].split("=");
                        bbtype = tmp[1].trim();
//
// If the breadboard is a type BB55 then we also need the dimensions for the user set strip board size
                  if(bbtype == "BB55")
	    {
                        globalBBwidth = tmp[2].trim();
                        globalBBheight =  tmp[3].trim();
                  }
//
              }
	else if(lines[i].indexOf("SHOWTHETOPAREA") > -1)
	{
                        var tmp = lines[i].split("=");
                        toparea = tmp[1].trim();
			oldcircuit = false;
	}
        }

	globalTopParkVisible = toparea;

        setBreadboardType(bbtype);
	if(oldcircuit == "true" || oldcircuit == true) 
	{
		moveComponents(4);
	}
}



//= = = = = = = = = = = = = =


function displayLoadStoreDialog()
{
        var stateDisplay = document.getElementById('stateDisplay');
        stateDisplay.value = globalBreadBoard.toString();
        showDialog(document.getElementById('saveload_dialog'), null);
}

//= = = = = = = = = = = = = =
// This function is used to select all of the data in the Load Save text box
// thereby saving the user from having to scroll down to manually select all the text.

function selectAllData()    // sad = select all data  
{
	var sad = document.getElementById('stateDisplay');
	sad.focus();
	sad.select();
}


//= = = = = = = = = = = = = =
// Arrive at this function when the "Comp Up/Dn" button is clicked 
// calls the pop-up window to show the range of options

function displayUpDownDialog()
{
        showDialog(document.getElementById('movecomps_dialog'), null);
}

//= = = = = = = = = = = = = =
// This function  moves the components on a display up or down by 295 pixels when a top off-board area is enabled or removed.
// value for "updwn" of 1 = move down, 2 = up and drop, 3 = up and gather

function moveComponents(updwn)
{
	var directn = parseInt(updwn);
	hideAllDialogs();
        var stateDisplay = document.getElementById('stateDisplay');
        stateDisplay.value = globalBreadBoard.toString();

        okToClear = true;
        clearBreadBoard( ! okToClear);

        var circuitCode = stateDisplay.value;
        var lines = circuitCode.split("\n");

        for(var i = 0; i < lines.length; ++ i)
        {
                if(lines[i].length > 10 && lines[i].indexOf("BREADBOARDSTYLE") == -1 && lines[i].indexOf("SHOWTHETOPAREA") == -1)
                {
                        var parts = lines[i].split("|");

			if(directn == 1) // downwards
			{
				parts[3] = parseInt(parts[3]) + 295		
			}
			else if(directn == 2) // up and drop/delete any in top area
			{	
				if ( parts[3] < 295)
				{
					continue;
				}
				else
				{
					parts[3] = parseInt(parts[3]) - 295;
				}
			}
			else if(directn == 3) // up and gather
			{	
				if( parts[3] < 295)
				{
					parts[3] = 0; 
				}
				else
				{
					parts[3] = parseInt(parts[3]) - 295;
				}
			}
			else if(directn == 4) // up and left for backward compatability
			{
				parts[2] = parseInt(parts[2]) - 160	// adjust the x coordinate value	
				parts[3] = parseInt(parts[3]) - 60	// adjust the y coordinate value	
			}
		
                        var newComp = new BBComponent(parts[0], parts[1], parts[2], parts[3], parts[4], parts[5],
                        parts[6], parts[7], parts[8], parts[9], parts[10], parts[11], parts[12]);
                        createComponent(newComp);
                }
        }
}
//= = = = = = = = = = = = = =
// Arrive at this function when the "Set Gen StripBrd" button is clicked 
// calls the pop-up window to show the range of options

function displaystripbrdDialog()
{
	document.getElementById("RowSize").value = globalBBwidth;
	document.getElementById("ColSize").value = globalBBheight;
        showDialog(document.getElementById('adjustBB_dialog'), null);
}
//= = = = = = = = = = = = = =
// This function  enables the user to select the dimension of a strip board over a range of widths and heights
// value for "rowsl" and "cols" set the width and heigth of the board respectively

function setstripboard(BBmode)
{

	var BBsizer = parseInt(BBmode);
	hideAllDialogs();

	if(BBsizer == 1) // default of 10 x 10
		{
		globalBBwidth  = 10;
		globalBBheight = 10;
		}
	else if(BBsizer == 2) // new user selected size
		{
		globalBBwidth = document.getElementById("RowSize").value;
		globalBBheight = document.getElementById("ColSize").value;
		}
	setBreadboardType(globalBreadBoardDisplay);
}
//= = = = = = = = = = = = = =

function openDialog(e)
{
        e = getEvent(e);
        var target = getEventSource(e);

        // -------------------------------------------------
        // Find the element with the "parttype" attribute
        // which will become the target element.
        // -------------------------------------------------
        if(getElementAttribute(target, "parttype"))
        {
                ;
                // Do nothing...
        }
        else
        {
                while(target = getElementParent(target))
                {
                        if(getElementAttribute(target, "parttype"))
                        {
                                break;
                        }
                }
        }

        // -------------------------------------------------
        // Find the component reference for this component.
        // If not found (should never happen) just leave.
        // -------------------------------------------------
        var componentRef = null;
        if(target)
        {
                globalComponent = target;
                componentRef = globalBreadBoard.find(globalComponent.id);
        }
        else
        {
                globalComponent = null;
                return;
        }


        // -------------------------------------------------------------
        // Initiallize the dialog with this component's values.
        // Display the dialog.
        // -------------------------------------------------------------
        // ADD NEW DIALOG INITIALLIZERS HERE...
        // -------------------------------------------------------------
        var parttype = getElementAttribute(target, "parttype");
        if(parttype && globalComponent && componentRef)
        {
                switch(parttype)
                {
                        case "Note" :
                        document.getElementById("NOTETEXT").value = componentRef.text;
                        document.getElementById("NOTESIZE").value = componentRef.compSize;
                        setRadioValue("noteorient", componentRef.orientation);
                        showDialog(document.getElementById("note_dialog"), e);
                        return false;
                        break;

                        case "IC" :
                        document.getElementById("ICPACKAGE").value = componentRef.package;
                        document.getElementById("ICNAME").value = componentRef.partnumber;
                        setRadioValue("diporient", componentRef.orientation);
                        showDialog(document.getElementById("ic_dip_dialog"), e);
                        return false;
                        break;

                        case "LED" :
                        document.getElementById("LEDCOLOR").value = componentRef.color;
                        setRadioValue("ledorient", componentRef.orientation);
                        showDialog(document.getElementById("led_dialog"), e);
                        return false;
                        break;

                        case "Diode" :
                        document.getElementById("DIODENAME").value = componentRef.partnumber;
                        document.getElementById("DIODESIZE").value = componentRef.compSize;
                        setRadioValue("diodepackage", componentRef.package);
                        setRadioValue("diodeorient", componentRef.orientation);
                        showDialog(document.getElementById("diode_dialog"), e);
                        return false;
                        break;

                        case "Capacitor" :
                        document.getElementById("CAPVALUE").value = componentRef.compValue;
                        document.getElementById("CAPSIZE").value = componentRef.compSize;
                        setRadioValue("cappackage", componentRef.package);
                        setRadioValue("caporient", componentRef.orientation);
                        showDialog(document.getElementById("capacitor_dialog"), e);
                        return false;
                        break;

                        case "Transistor" :
                        document.getElementById("TRANSISTORVALUE").value = componentRef.partnumber;
                        document.getElementById("TRANSISTORPINS").value = componentRef.pins;
                        setRadioValue("transistorpackage", componentRef.package);
                        setRadioValue("transistororient", componentRef.orientation);
                        showDialog(document.getElementById("transistor_dialog"), e);
                        return false;
                        break;

                        case "Resistor" :
                        document.getElementById("RESVALUE").value = componentRef.compValue;
                        document.getElementById("RESSIZE").value = componentRef.compSize;
                        setRadioValue("resistororient", componentRef.orientation);
                        showDialog(document.getElementById("resistor_dialog"), e);
                        return false;
                        break;

                        case "Wire" :
                        clearColorBorders();
                        document.getElementById(componentRef.color).style.border = "dashed 1px black";
                        document.dialogwindowsForm.wirecolor.value = componentRef.color;
                        document.getElementById("WIRELENGTH").value = componentRef.compSize;
                        document.getElementById("WIRELEVEL").value = componentRef.pins;
                        var decomp1 = componentRef.orientation;
                        var decomp2 = componentRef.package;
                        var decomp3 = componentRef.designator;
                        var worient = decomp1 / 10;
                        var worient = parseInt( worient);
                        var woff = decomp1 -(worient * 10);
                        var wend1 = decomp2 / 10;
                        var wend1 = parseInt( wend1);
                        var wend2 = decomp2 -(wend1 * 10);
                        var woff1 = decomp3 / 10;
                        var woff1 = parseInt( woff1);
                        var woff2 = decomp3 -(woff1 * 10);
                        setRadioValue("wireorient", worient);
                        setRadioValue("wireoffset", woff);
                        setRadioValue("wire1end", wend1);
                        setRadioValue("wire2end", wend2);
                        setRadioValue("end1off", woff1);
                        setRadioValue("end2off", woff2);
                        showDialog(document.getElementById("wire_dialog"), e);
                        return false;
                        break;

                        case "Switch" :
                        document.getElementById("SWITCHNAME").value = componentRef.text;
                        document.getElementById("SWITCHCOLOR").value = componentRef.color;
                        setRadioValue("switchpackage", componentRef.package);
                        setRadioValue("switchorient", componentRef.orientation);
                        showDialog(document.getElementById("switch_dialog"), e);
                        return false;
                        break;

                        case "Terminal" :
                        document.getElementById("TERMINALNAME").value = componentRef.text;
                        document.getElementById("terminalpackage").value = componentRef.package;
                        document.getElementById("TERMINALSIZE").value = componentRef.compSize;
                        setRadioValue("terminalorient", componentRef.orientation);
                        showDialog(document.getElementById("terminal_dialog"), e);
                        return false;
                        break;

                        case "DIPSw" :
                        document.getElementById("DIPSWNAME").value = componentRef.text;
                        document.getElementById("DIPSWSIZE").value = componentRef.compSize;
                        showDialog(document.getElementById("dipsw_dialog"), e);
                        return false;
                        break;

                        case "Miscell" :
                        document.getElementById("MISCNAME").value = componentRef.text;
                        document.getElementById("miscpackage").value = componentRef.package;
                        showDialog(document.getElementById("miscell_dialog"), e);
                        return false;
                        break;

                        case "FourD" :
                        document.getElementById("FOURDNAME").value = componentRef.text;
                        document.getElementById("fourdpackage").value = componentRef.package;
                        showDialog(document.getElementById("fourd_dialog"), e);
                        return false;
                        break;

// New Aug2016 - This device group is for Prototyping and Stripboard cuts, parts, etc
                        case "ProtoBrd" :
                        document.getElementById("PROTOBRDNAME").value = componentRef.text;
                        document.getElementById("protobrdpackage").value = componentRef.package;
                        showDialog(document.getElementById("protobrd_dialog"), e);
                        return false;
                        break;

// New Sept2016 - This device group is for Prototyping and Stripboard 1-Span wires
                        case "Wlinks" :
                        document.getElementById("wlinkspackage").value = componentRef.package;
                        document.getElementById("wlinksorient").value = componentRef.orientation;
                        showDialog(document.getElementById("wlinks_dialog"), e);
                        return false;
                        break;

                        case "Slider" :
                        document.getElementById("sliderTEXT").value = componentRef.text;
                        document.getElementById("sliderpackage").value = componentRef.package;
                        setRadioValue("sliderorient", componentRef.orientation);
                        showDialog(document.getElementById("slider_dialog"), e);
                        return false;
                        break;
                }
        }
}


function applyDialogValues()
{
        // -------------------------------------------------------------
        // Set the component's values to the values entered in the
        // Dialog and close the dialog.
        // -------------------------------------------------------------
        // ADD NEW DIALOG VALUES TO COMPONENT CODE HERE
        // -------------------------------------------------------------
        hideAllDialogs();

        if (globalComponent)
        {
                var parttype = getElementAttribute(globalComponent, "parttype");
                if(parttype && globalComponent)
                {
                        var componentRef = globalBreadBoard.find(globalComponent.id);
                        var innerDiv = null;
                        switch(parttype)
                        {
                                case "Note" :
                                componentRef.imgname = "NOTEPAD_" + document.getElementById("NOTESIZE").value + findRadioValue("noteorient")
                                componentRef.compSize = document.getElementById("NOTESIZE").value;
                                componentRef.text = document.getElementById("NOTETEXT").value;
                                componentRef.orientation = findRadioValue("noteorient");
                                applyComponentValuesToView(componentRef, globalComponent);
                                break;

                                case "IC" :
                                componentRef.imgname = document.getElementById("ICPACKAGE").value + "_" + findRadioValue("diporient");
                                componentRef.partnumber = document.getElementById("ICNAME").value;
                                componentRef.package = document.getElementById("ICPACKAGE").value;
                                componentRef.orientation = findRadioValue("diporient");
                                applyComponentValuesToView(componentRef, globalComponent);
                                break;

                                case "LED" :
                                componentRef.imgname = "led_" + document.getElementById("LEDCOLOR").value + findRadioValue("ledorient");
                                componentRef.color = document.getElementById("LEDCOLOR").value;
                                applyComponentValuesToView(componentRef, globalComponent);
                                componentRef.orientation = findRadioValue("ledorient");
                                break;

                                case "Diode" :
                                componentRef.imgname = "diode_" + findRadioValue("diodepackage") + document.getElementById("DIODESIZE").value + findRadioValue("diodeorient");
                                componentRef.partnumber = document.getElementById("DIODENAME").value;
                                componentRef.compSize = document.getElementById("DIODESIZE").value;
                                componentRef.package = findRadioValue("diodepackage");
                                componentRef.orientation = findRadioValue("diodeorient");
                                applyComponentValuesToView(componentRef, globalComponent);
                                break;

                                case "Capacitor" :
                                componentRef.imgname = "cap_" + findRadioValue("cappackage") + document.getElementById("CAPSIZE").value + findRadioValue("caporient");
                                componentRef.compValue = document.getElementById("CAPVALUE").value;
                                componentRef.compSize = document.getElementById("CAPSIZE").value;
                                componentRef.package = findRadioValue("cappackage");
                                componentRef.orientation = findRadioValue("caporient");
                                applyComponentValuesToView(componentRef, globalComponent);
                                break;

                                case "Transistor" :
                                componentRef.imgname = "transistor_" + findRadioValue("transistorpackage") +  findRadioValue("transistororient");
                                componentRef.partnumber = document.getElementById("TRANSISTORVALUE").value;
                                componentRef.pins = document.getElementById("TRANSISTORPINS").value;
                                componentRef.package = findRadioValue("transistorpackage");
                                componentRef.orientation = findRadioValue("transistororient");
                                applyComponentValuesToView(componentRef, globalComponent);
                                break;

                                case "Resistor" :
                                componentRef.compValue = document.getElementById("RESVALUE").value;
                                componentRef.compSize = document.getElementById("RESSIZE").value;
                                componentRef.orientation = findRadioValue("resistororient");
                                applyComponentValuesToView(componentRef, globalComponent);
                                break;

                                case "Wire" :
                                componentRef.compSize = document.getElementById("WIRELENGTH").value;
                                componentRef.pins = document.getElementById("WIRELEVEL").value;
                                componentRef.color = document.dialogwindowsForm.wirecolor.value;
                                componentRef.orientation = findRadioValue("wireorient") + findRadioValue("wireoffset");
                                componentRef.package = findRadioValue("wire1end") + findRadioValue("wire2end");
                                componentRef.designator = findRadioValue("end1off") + findRadioValue("end2off");
                                applyComponentValuesToView(componentRef, globalComponent);
                                break;

                                case "Switch" :
                                componentRef.imgname = "switch_" + findRadioValue("switchpackage") + document.getElementById("SWITCHCOLOR").value + findRadioValue("switchorient");
                                componentRef.text = document.getElementById("SWITCHNAME").value;
                                componentRef.color = document.getElementById("SWITCHCOLOR").value;
                                componentRef.package = findRadioValue("switchpackage");
                                componentRef.orientation = findRadioValue("switchorient");
                                applyComponentValuesToView(componentRef, globalComponent);
                                break;


                                case "Terminal" :
                                componentRef.package = document.getElementById("terminalpackage").value;
                                componentRef.orientation = findRadioValue("terminalorient");
                                componentRef.compSize = document.getElementById("TERMINALSIZE").value;

                                switch(componentRef.package)
                                {
                                        case "1" :
                                            componentRef.compSize =  3;
                                            break;
                                        case "3" :
                                        case "4" :
                                            componentRef.orientation = 1 ;
                                            break;
                                        case "2" :
                                        case "5" :
                                        case "6" :
                                            break;
                                        case "7" :
                                        case "8" :
                                            componentRef.compSize = 4;
                                            break;
                                        case "9" :
                                            componentRef.compSize = 5;
                                            break;
                                        case "10" :
 					case "11" :
                                            componentRef.compSize = 6;
                                            break;
                                }

                                componentRef.imgname = "terminal_" + componentRef.package + componentRef.compSize + componentRef.orientation;
                               
				componentRef.text = document.getElementById("TERMINALNAME").value;
 				applyComponentValuesToView(componentRef, globalComponent);
                                break;

                                case "DIPSw" :
                                var switchorient = 1
                                componentRef.imgname = "dipsw_" + document.getElementById("DIPSWSIZE").value + switchorient;
                                componentRef.text = document.getElementById("DIPSWNAME").value;
                                componentRef.compSize = document.getElementById("DIPSWSIZE").value;
                                applyComponentValuesToView(componentRef, globalComponent);
                                break;

                                case "Miscell" :
                                componentRef.imgname = "misc_" + document.getElementById("miscpackage").value;
                                componentRef.text = document.getElementById("MISCNAME").value;
                                componentRef.package = document.getElementById("miscpackage").value;
                                applyComponentValuesToView(componentRef, globalComponent);
                                break;

                                case "FourD" :
                                componentRef.imgname = "fourd_" + document.getElementById("fourdpackage").value;
                                componentRef.text = document.getElementById("FOURDNAME").value;
                                componentRef.package = document.getElementById("fourdpackage").value;
                                applyComponentValuesToView(componentRef, globalComponent);
                                break;

// New Aug2016 - This device group is for Prototyping and stripboard cuts, etc
                                case "ProtoBrd" :
		 		componentRef.package = document.getElementById("protobrdpackage").value;				
				componentRef.imgname = "protobrd_" + componentRef.package;
                                componentRef.text = document.getElementById("PROTOBRDNAME").value;
                                applyComponentValuesToView(componentRef, globalComponent);
                                break;

// New Sept2016 - This device group is for Prototyping and stripboard wires
                                case "Wlinks" :
		 		componentRef.package = document.getElementById("wlinkspackage").value;				
                                componentRef.orientation = document.getElementById("wlinksorient").value;
				componentRef.imgname = "protowire_" + componentRef.orientation + componentRef.package;
                                componentRef.text = " ";
                                applyComponentValuesToView(componentRef, globalComponent);
                                break;

// New Sept2016 - This froup for floating components similar to Notes
                                case "Slider" :
                                componentRef.text = document.getElementById("sliderTEXT").value;
                                componentRef.package = document.getElementById("sliderpackage").value;
                                componentRef.orientation = findRadioValue("sliderorient");
				componentRef.imgname = "floating_" + componentRef.orientation + componentRef.package;
                                applyComponentValuesToView(componentRef, globalComponent);
                                break;




                        }
                }
        }
        globalComponent = null;
    window.localStorage.setItem("lastCircuit", globalBreadBoard.toString());
}

// -------------------------------------------------------------------------
// ADD NEW DIALOG DIV NAMES TO THIS LIST.
// -------------------------------------------------------------------------
var dialogNameArray = new Array();
dialogNameArray.push("resistor_dialog");
dialogNameArray.push("ic_dip_dialog");
dialogNameArray.push("diode_dialog");
dialogNameArray.push("led_dialog");
dialogNameArray.push("capacitor_dialog");
dialogNameArray.push("transistor_dialog");
dialogNameArray.push("terminal_dialog");
dialogNameArray.push("wire_dialog");
dialogNameArray.push("switch_dialog");
dialogNameArray.push("dipsw_dialog");
dialogNameArray.push("miscell_dialog");
dialogNameArray.push("fourd_dialog");
dialogNameArray.push("protobrd_dialog");
dialogNameArray.push("wlinks_dialog");
dialogNameArray.push("note_dialog");
dialogNameArray.push("slider_dialog");
dialogNameArray.push("saveload_dialog");
dialogNameArray.push("movecomps_dialog");
dialogNameArray.push("adjustBB_dialog");


function hideAllDialogs()
{
        for(var i = 0; i < dialogNameArray.length; ++ i)
        {
            try {
                document.getElementById(dialogNameArray[i]).style.visibility = "hidden";
            } catch (e) { }
        }
        globalDialogVisible = false;

}
// **************************************************




function init()
{
        globalTopParkVisible = false;
        globalBreadBoard = new BreadBoard();
        document.getElementById("Div1").innerHTML = getResistorHTML(0, 0, 1000, 1, 3);
        // x, y, rval (1kOhm), orientation, ressize (3 is large size)



        var lens = "1,2,3,4,5,2,3".split(",");
        var len = wireColors.length;
        var i = 0;
        while(document.getElementById("Wire" + i))
        {
                var wirediv = document.getElementById("Wire" + i);
                wirediv.setAttribute("initcolor", wireColors[lens[i] -1]);
                var orient = (i > 4) ? 2 : 1;
                wirediv.innerHTML = getWireHTML(orient, 1, 1, 1, 1, 1, lens[i], wireColors[lens[i] -1], wirediv);
                Drag.init(wirediv);
                ++ i;
        }
        Drag.init(document.getElementById("Div1"));
        Drag.init(document.getElementById("Div2"));
        Drag.init(document.getElementById("Div5"));
        Drag.init(document.getElementById("Div7"));
        Drag.init(document.getElementById("Div9"));
        Drag.init(document.getElementById("Div10"));
        Drag.init(document.getElementById("Div13"));
        Drag.init(document.getElementById("Div15"));
        Drag.init(document.getElementById("Div17"));
        Drag.init(document.getElementById("Div19"));
        Drag.init(document.getElementById("Div21"));
        Drag.init(document.getElementById("Div23"));
        Drag.init(document.getElementById("Div25"));
        Drag.init(document.getElementById("Div27"));
        Drag.init(document.getElementById("Div29"));

        Drag.init(document.getElementById("resistor_dialog"));
        Drag.init(document.getElementById("ic_dip_dialog"));
        Drag.init(document.getElementById("led_dialog"));
        Drag.init(document.getElementById("diode_dialog"));
        Drag.init(document.getElementById("capacitor_dialog"));
        Drag.init(document.getElementById("transistor_dialog"));
        Drag.init(document.getElementById("switch_dialog"));
        Drag.init(document.getElementById("terminal_dialog"));
        Drag.init(document.getElementById("dipsw_dialog"));
        Drag.init(document.getElementById("miscell_dialog"));
        Drag.init(document.getElementById("fourd_dialog"));
        Drag.init(document.getElementById("note_dialog"));
        Drag.init(document.getElementById("slider_dialog"));
        Drag.init(document.getElementById("wire_dialog"));
        Drag.init(document.getElementById("protobrd_dialog"));
        Drag.init(document.getElementById("wlinks_dialog"));

        if (mozilla)
        {
                document.addEventListener("contextmenu", openDialog, true);
                document.addEventListener("click", hidemenu, true);
        }
        else if (ie)
        {
                document.attachEvent("oncontextmenu", openDialog);
                document.attachEvent("onclick", hidemenu);
        }

        document.images["splashscreen"].style.visibility = "hidden";


    globalTopParkVisible = false;

    if (window.localStorage.getItem("lastCircuit")) {
        loadCircuit(window.localStorage.getItem("lastCircuit"), true);
    }
}

// = = = = = = = = = = = = = = = = = = = = = = = = =

function iebody()
{
        return (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body;
}
