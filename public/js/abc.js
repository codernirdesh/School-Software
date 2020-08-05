/*function for amount convert into english words */
		   
		   var iWords = [' zero', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
            var ePlace = [' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
            var tensPlace = ['', ' ten', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
            var inWords = [];

            var numReversed, inWords, actnumber, i, j;

            function tensComplication() {
            if (actnumber[i] == 0) {
                inWords[j] = '';
            } else if (actnumber[i] == 1) {
                inWords[j] = ePlace[actnumber[i - 1]];
            } else {
                inWords[j] = tensPlace[actnumber[i]];
            }
            }

            function convertAmount() {
				
                var numericValue = document.getElementById('total').value;
				
                numericValue = parseFloat(numericValue).toFixed(2);
				var amount = numericValue.toString().split('.');
                var taka = amount[0];
                var paisa = amount[1];
                 document.getElementById('container').value = convert(taka) +" Rupees and"+ convert(paisa)+" paisa only";
				
            }
            function convert(numericValue) {
            inWords = []
            if(numericValue == "00" || numericValue =="0"){
                return ' zero';
            }
            var obStr = numericValue.toString();
            numReversed = obStr.split('');
            actnumber = numReversed.reverse();

			if (Number(numericValue) == 0) {
                document.getElementById('container').value = 'TOTAL Zero';
                return false;
            }

            var iWordsLength = numReversed.length;
            var finalWord = '';
            j = 0;
            for (i = 0; i < iWordsLength; i++) {
                switch (i) {
                    case 0:
                        if (actnumber[i] == '0' || actnumber[i + 1] == '1') {
                            inWords[j] = '';
                        } else {
                            inWords[j] = iWords[actnumber[i]];
                        }
                        inWords[j] = inWords[j] + '';
                        break;
                    case 1:
                        tensComplication();
                        break;
                    case 2:
                        if (actnumber[i] == '0') {
                            inWords[j] = '';
                        } else if (actnumber[i - 1] !== '0' && actnumber[i - 2] !== '0') {
                            inWords[j] = iWords[actnumber[i]] + ' hundred';
                        } else {
                            inWords[j] = iWords[actnumber[i]] + ' hundred';
                        }
                        break;
                    case 3:
                        if (actnumber[i] == '0' || actnumber[i + 1] == '1') {
                            inWords[j] = '';
                        } else {
                            inWords[j] = iWords[actnumber[i]];
                        }
                        if (actnumber[i + 1] !== '0' || actnumber[i] > '0') {
                            inWords[j] = inWords[j] + ' thousand';
                        }
                        break;
                    case 4:
                        tensComplication();
                        break;
                    case 5:
                        if (actnumber[i] == '0' || actnumber[i + 1] == '1') {
                            inWords[j] = '';
                        } else {
                            inWords[j] = iWords[actnumber[i]];
                        }
                        if (actnumber[i + 1] !== '0' || actnumber[i] > '0') {
                            inWords[j] = inWords[j] + ' lakh';
                        }
                        break;
                    case 6:
                        tensComplication();
                        break;
                    case 7:
                        if (actnumber[i] == '0' || actnumber[i + 1] == '1') {
                            inWords[j] = '';
                        } else {
                            inWords[j] = iWords[actnumber[i]];
                        }
                        inWords[j] = inWords[j] + ' crore';
                        break;
                    case 8:
                        tensComplication();
                        break;
                    default:
                        break;
                }
                j++;
            }


            inWords.reverse();
            for (i = 0; i < inWords.length; i++) {
                finalWord += inWords[i];
            }
            return finalWord;
            }
/* fuction for amount convert without currency(in hindi and english words)  */

function wwords()
{
	var  str, str1, str2, str3, q, q1,p, st;
	var result='';
	var ws = new Array();
	var ws1='';
	var result2='';
	// whiout point
	var  finalWords= document.getElementById('container').value;
	finalWords=finalWords.trim();
	var res1 = finalWords.match(" Rupees and zero");
	if(res1 == " Rupees and zero")
	{
		
		
	var completestring = finalWords.replace('Rupees and zero paisa only','');
	
		
	/* Function for text transform capitalize */
    var pieces = completestring.split(" ");
    for ( var i = 0; i < pieces.length; i++ )
    {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1);
    }
    var string=pieces.join(" ");
	
	document.getElementById('container3').value = string;
	}
		
	else
	{	
		
		// else for number in point
		
	var res2 =finalWords.replace("Rupees and", "Point");
	
	var res3 =res2.replace(" paisa only", " ");
		
	var splitword = res3.split(" Point ");
	
	var words2;
		for(  var z=0; z < splitword.length; z++)
		{
			 var words1=splitword[1];
			 words2=splitword[0];
		}
		
		var spword = words1.split(" ");
		
		/*var z='zero ';
		var addstring = z + spword;
		var ssword = addstring .replace(",", " ");
		//alert(ssword);
		
		var sword = ssword.split(" ");
		//alert(addstring);
		//var ssword =sword.replace(",", " ");
		*/
		for(  var z=0; z < spword  .length; z++)
		{
			 var ws1=spword [0];
			 var ws2=spword [1];
			
			 if(ws1 == "one")
			 {
				var t1 = " zero one "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			else if(ws1 == "two")
			 {
				var t1 = " zero two "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			else if(ws1 == "three")
			 {
				var t1 = " zero three "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			 else if(ws1 == "four")
			 {
				var t1 = " zero four "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			else if(ws1 == "five")
			 {
				var t1 = " zero five "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			else if(ws1 == "six")
			 {
				var t1 = " zero six "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			else if(ws1 == "seven")
			 {
				var t1 = " zero seven "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			else if(ws1 == "eight")
			 {
				var t1 = " zero eight "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			 else if(ws1 == "nine")
			 {
				var t1 = " zero nine "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			 else if(ws1 == "twenty")
			 {
				var t1 = " two "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			 else if(ws1 == "thirty")
			 {
				var t1 = " three "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			else if(ws1 == "forty")
			 {
				var t1 = " four "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			 else if(ws1 == "fifty")
			 {
				var t1 = " five "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			else if(ws1 == "sixty")
			 {
				var t1 = " six "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			 else if(ws1 == "seventy")
			 {
				var t1 = " seven "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			 else if(ws1 == "eighty")
			 {
				var t1 = " eight "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			 else if(ws1 == "ninety")
			 {
				var t1 = " nine "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			 else if(ws1 == "ten")
			 {
				var t1 = " one "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			
			else if (ws1 == "eleven")
			 {
				var t1 = " one one "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			 else if(ws1 == "twelve")
			 {
				var t1 = " one two "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			 else if(ws1 == "thirteen")
			 {
				var t1 = " one three "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			 else if(ws1 == "fourteen")
			 {
				var t1 = " one four "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			 else if(ws1 == "fifteen")
			 {
				var t1 = " one five "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			 else if(ws1 == "sixteen")
			 {
				var t1 = " one six "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			 else if(ws1 == "seventeen")
			 {
				var t1 = " one seven "
				
				var completestring = words2 + " Point" + t1 + ws2;
			}
			 else if(ws1 == "eighteen")
			 {
				var t1 = " one eight "
				
				var completestring = words2 + " Point" + t1 + ws2;
				
			}
			 else if(ws1 == "nineteen")
			 {
				var t1 = " one nine "
				
				var completestring = words2 + " Point" + t1 + ws2;
				
			}
			/* else if(ws1 == "one")
			 {
				var t1 = " one "
				
				completestring = words2 + " Point" + t1 + ws2;
				
			}
			*/
			 
			
			
		
		}
		/* Function for text transform capitalize */
		 var pieces = completestring.split(" ");
		for ( var i = 0; i < pieces.length; i++ )
		{
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1);
		}
		var string=pieces.join(" ");
		document.getElementById('container3').value = string;
		
		}
		//alert(completestring);
		
	   var words = completestring.split(" ");
		var histr = new Array();
		var j=0;
	
		for (var i = 0; i < words .length; i++) 
		{                       
		str = words[i];
		str1 = words[i+1];
		
		
		if(str === 'Point')
		{
		histr[j]= ' दशमलव ';
		} 
		
		if(str === ',')
		{
		histr[j]= ' ';
		}
		if(str === '')
		{
		histr[j]= ' ';
	    }
		if(str === 'hundred')
		{
		histr[j]= ' सय ';
		}
		if(str === 'thousand')
		{
		histr[j]= ' हजार ';
		}
		if(str === 'lakh')
		{
		histr[j]= ' लाख ';
		}
		if(str === 'crore')
		{
		histr[j]= ' करोड ';
		}
		if(str === 'zero')
		{
		histr[j]= '  शून्य ';
		}
		/* if for one to ten*/
		if (str === 'one' ) 
		{
        histr[j] = ' एक ';
		}
		if (str === 'two' ) 
		{
        histr[j] = ' दुई ';
		}
		if (str === 'three' ) 
		{
        histr[j] = ' तीन ';
		}
		if (str === 'four' ) 
		{
        histr[j] = ' चार ';
		}
		if (str === 'five' ) 
		{
        histr[j] = ' पांच ';
		}
		if (str === 'six' ) 
		{
        histr[j] = ' छ ';
		}
		if (str === 'seven' ) 
		{
        histr[j] = ' सात ';
		}
		if (str === 'eight' ) 
		{
        histr[j] = ' आठ ';
		}
		if (str === 'nine' ) 
		{
        histr[j] = ' नौ ';
		}
		if (str === 'ten' ) 
		{
        histr[j] = ' दस ';
		}
		if (str === 'eleven' ) 
		{
        histr[j] = ' एघार ';
		}
		if (str === 'twelve' ) 
		{
        histr[j] = ' बाह्र ';
		}
		if (str === 'thirteen' ) 
		{
        histr[j] = ' तेह्र ';
		}
		if (str === 'fourteen' ) 
		{
        histr[j] = ' चौध ';
		}
		if (str === 'fifteen' ) 
		{
        histr[j] = ' पन्ध्र ';
		}
		if (str === 'sixteen' ) 
		{
        histr[j] = ' सोह्र ';
		}
		if (str === 'seventeen' ) 
		{
        histr[j] = ' सत्र ';
		}
		if (str === 'eighteen' ) 
		{
        histr[j] = ' अठार ';
		}
		if (str === 'nineteen' ) 
		{
        histr[j] = ' उन्नाइस ';
		}
		
		if (str === 'twenty' ) 
		{
			if (str1 === 'one' )
			{
				histr[j] = ' एक्काइस ';
			}
			else if (str1 === 'two' )
			{
				histr[j] = ' बाइस ';
			}
			else if (str1 === 'three' )
			{
				histr[j] = ' तेईस ';
			}
			else if (str1 === 'four' )
			{
				histr[j] = ' चौबीस ';
			}
			else if (str1 === 'five' )
			{
				histr[j] = ' पच्चीस ';
			}
			else if (str1 === 'six' )
			{
				histr[j] = ' छब्बीस ';
			}
			else if (str1 === 'seven' )
			{
				histr[j] = ' सत्ताईस ';
			}
			else if (str1 === 'eight' )
			{
				histr[j] = ' अठ्ठाईस ';
			}
			else if (str1 === 'nine' )
			{
				histr[j] = ' उनन्तिस ';
			}
			
			else 
			{
				histr[j] = ' बीस ';
				i--;
			}
			i++;
		}
	
			
		if (str === 'thirty' ) 
		{
			
			if (str1 === 'one' )
			{
				histr[j] = ' एकत्तिस ';
				
			}
			else if (str1 === 'two' )
			{
				histr[j] = ' बत्तिस ';
				
			}
			else if (str1 === 'three' )
			{
				histr[j] = ' तेत्तिस ';
				
			}
			else if (str1 === 'four' )
			{
				histr[j] = ' चौँतिस ';
				
			}
			else if (str1 === 'five' )
			{
				histr[j] = ' पैँतिस ';
				
			}
			else if (str1 === 'six' )
			{
				histr[j] = ' छत्तिस ';
				
			}
			else if (str1 === 'seven' )
			{
				histr[j] = ' सैँतीस ';
				
			}
			else if (str1 === 'eight' )
			{
				histr[j] = ' अठतीस ';
				
			}
			else if (str1 === 'nine' )
			{
				histr[j] = ' उनन्चालीस ';
				
			}
			else
			{
				histr[j] = ' तीस ';
				i--;
			}
			i++;
		}
		if (str === 'forty' ) 
		{
			if (str1 === 'one' )
			{
				histr[j] = ' एकचालीस ';
				
			}
			else if (str1 === 'two' )
			{
				histr[j] = ' बयालीस ';
				
			}
			else if (str1 === 'three' )
			{
				histr[j] = ' त्रियालीस ';
				
			}
			else if (str1 === 'four' )
			{
				histr[j] = ' चवालीस ';
			
			}
			else if (str1 === 'five' )
			{
				histr[j] = ' पैँतालीस ';
				
			}
			else if (str1 === 'six' )
			{
				histr[j] = ' छयालीस ';
				
			}
			else if (str1 === 'seven' )
			{
				histr[j] = ' सच्चालीस ';
				
			}
			else if (str1 === 'eight' )
			{
				histr[j] = ' अठचालीस ';
				
			}
			else if (str1 === 'nine' )
			{
				histr[j] = ' उनन्चास ';
				
			}
			else
			{
				histr[j] = ' चालीस ';
				i--;
			}
			i++;
		}
		if (str === 'fifty' ) 
		{
			if (str1 === 'one' )
			{
				histr[j] = ' एकाउन्न';
				
			}
			else if (str1 === 'two' )
			{
				histr[j] = ' बाउन्न ';
				
			}
			else if (str1 === 'three' )
			{
				histr[j] = ' त्रिपन्न ';
				
			}
			else if (str1 === 'four' )
			{
				histr[j] = ' चउन्न ';
				
			}
			else if (str1 === 'five' )
			{
				histr[j] = ' पचपन्न ';
				
			}
			else if (str1 === 'six' )
			{
				histr[j] = ' छपन्न ';
				
			}
			else if (str1 === 'seven' )
			{
				histr[j] = ' सन्ताउन्न ';
			
			}
			else if (str1 === 'eight' )
			{
				histr[j] = ' अन्ठाउन्न ';
				
			}
			else if (str1 === 'nine' )
			{
				histr[j] = ' उनन्साठी ';
				
			}
			else
			{
				histr[j] = ' पचास ';
				i--;
			}
			i++;
		}
		if (str === 'sixty' ) 
		{
			if (str1 === 'one' )
			{
				histr[j] = ' एकसट्ठी';
				
			}
			else if (str1 === 'two' )
			{
				histr[j] = ' बयसट्ठी ';
				
			}
			else if (str1 === 'three' )
			{
				histr[j] = ' त्रिसट्ठी ';
				
			}
			else if (str1 === 'four' )
			{
				histr[j] = ' चौंसट्ठी ';
			
			}
			else if (str1 === 'five' )
			{
				histr[j] = ' पैंसट्ठी ';
			
			}
			else if (str1 === 'six' )
			{
				histr[j] = ' छयसट्ठी ';
				
			}
			else if (str1 === 'seven' )
			{
				histr[j] = ' सतसट्ठी ';
				
			}
			else if (str1 === 'eight' )
			{
				histr[j] = ' अठसट्ठी ';
				
			}
			else if (str1 === 'nine' )
			{
				histr[j] = ' उनन्सत्तरी ';
				
			}
			else
			{
				histr[j] = ' साठी ';
				i--;
			}
			
			i++;
		}
		if (str === 'seventy' ) 
		{
			if (str1 === 'one' )
			{
				histr[j] = ' एकहत्तर';
				
			}
			else if (str1 === 'two' )
			{
				histr[j] = ' बहत्तर ';
			
			}
			else if (str1 === 'three' )
			{
			
				histr[j] = ' त्रिहत्तर ';
			
			}
			else if (str1 === 'four' )
			{
				histr[j] = ' चौहत्तर ';
				
			}
			else if (str1 === 'five' )
			{
				histr[j] = ' पचहत्तर ';
				
			}
			else if (str1 === 'six' )
			{
				histr[j] = ' छयहत्तर ';
				
			}
			else if (str1 === 'seven' )
			{
				histr[j] = ' सतहत्तर ';
				
			}
			else if (str1 === 'eight' )
			{
				histr[j] = ' अठहत्तर ';
				
			}
			else if (str1 === 'nine' )
			{
				histr[j] = ' उनासी ';
			
			}
			else
			{
				histr[j] = ' सत्तरी ';
				i--;
			}
			i++;
		}
		if (str === 'eighty' ) 
		{
			if (str1 === 'one' )
			{
				histr[j] = ' एकासी';
			
			}
			else if (str1 === 'two' )
			{
				histr[j] = ' बयासी ';
				
			}
			else if (str1 === 'three' )
			{
			
				histr[j] = ' त्रियासी ';
				
			}
			else if (str1 === 'four' )
			{
				histr[j] = ' चौरासी ';
				
			}
			else if (str1 === 'five' )
			{
				histr[j] = ' पचासी ';
				
			}
			else if (str1 === 'six' )
			{
				histr[j] = ' छयासी ';
				
			}
			else if (str1 === 'seven' )
			{
				histr[j] = ' सतासी ';
				
			}
			else if (str1 === 'eight' )
			{
				histr[j] = ' अठासी ';
			
			}
			else if (str1 === 'nine' )
			{
				histr[j] = ' उनान्नब्बे ';
			
			}
			else
			{
				histr[j] = ' असी ';
				i--;
			
			}
			i++;
		}
		if (str === 'ninety' ) 
		{
			if (str1 === 'one' )
			{
				histr[j] = ' एकान्नब्बे';
				
			}
			else if (str1 === 'two' )
			{
				histr[j] = ' बयानब्बे ';
			
			}
			else if (str1 === 'three' )
			{
			
				histr[j] = ' त्रियान्नब्बे ';
				
			}
			else if (str1 === 'four' )
			{
				histr[j] = ' चौरान्नब्बे ';
				
			}
			else if (str1 === 'five' )
			{
				histr[j] = ' पन्चानब्बे ';
				
			}
			else if (str1 === 'six' )
			{
				histr[j] = ' छयान्नब्बे';
				
			}
			else if (str1 === 'seven' )
			{
				histr[j] = ' सन्तान्नब्बे ';
				
			}
			else if (str1 === 'eight' )
			{       
				histr[j] = ' अन्ठान्नब्बे ';
				
			}
			else if (str1 === 'nine' )
			{
				histr[j] = ' उनान्सय ';
				
			}
			else
			{
				histr[j] = 'नब्बे ';
				i--;
				
			}
			
			i++;
		
		}
		j++;
		
	} //end of for loop
		
	for (q = 0; q < histr.length; q++) 
	{
         result += histr[q];
    }
	document.getElementById('container2').value = result;

	} 
/* fuction for amount convert in currency(in hindi and english words)  */

function gwords()
{
	var  str, str1, str2, str3, q, q1;
	 var result='';
	var ws = new Array();
	 var ws1='';
	 var result2='';
	
	var  finalWords= document.getElementById('container').value;
	//alert(finalWords);
	finalWords=finalWords.trim();
	
	 //ws = finalWords.split("Rupees ");
	//alert(ws.length);
	
	
	//alert(ws.length);
	//ws1=ws1.trim();
	//alert (z);
	//if(z == 0)
	//{
	var words = finalWords.split(" ");
	//alert(words);
	
	 var histr = new Array();
	 
	
		var j=0;
	 for (var i = 0; i < words.length; i++) 
	 {                       
		str = words[i];
		
		str1 = words[i+1];
		//alert(str);
		if(str === ',')
		{
		histr[j]= ' ';
	
		}
		if(str === '')
		{
		histr[j]= ' ';
	
		}
		if(str === 'and')
		{
		histr[j]= '';
		
		}
		if(str === 'only')
		{
		histr[j]= ' पैसा ';
	
		}
		if(str === 'Rupees')
		{
		histr[j]= ' रुपैंया र ';
	
		}
		if(str === 'paisa')
		{
		histr[j]= '';
	
		}
		if(str === 'hundred')
		{
		histr[j]= ' सय';
		
		}
		if(str === 'thousand')
		{
		histr[j]= ' हजार ';
		
		}
		
		if(str === 'lakh')
		{
		histr[j]= ' लाख ';
		
		}
		if(str === 'crore')
		{
		histr[j]= ' करोड ';
		
		}
		
		if(str === 'zero')
		{
		histr[j]= ' शून्य ';
		
		}
		if (str === 'one' ) 
		{
        histr[j] = ' एक ';
		
		}
		if (str === 'two' ) 
		{
        histr[j] = ' दुई ';
		
		}
		if (str === 'three' ) 
		{
        histr[j] = ' तीन ';
		
		}
		if (str === 'four' ) 
		{
        histr[j] = ' चार ';
		
		}
		if (str === 'five' ) 
		{
        histr[j] = ' पांच ';
		
		}
		if (str === 'six' ) 
		{
        histr[j] = ' छ ';
		
		}
		if (str === 'seven' ) 
		{
        histr[j] = 'सात ';
		
		}
		if (str === 'eight' ) 
		{
        histr[j] = ' आठ ';
		
		}
		if (str === 'nine' ) 
		{
        histr[j] = ' नौ ';
		}
		if (str === 'ten' ) 
		{
        histr[j] = ' दस ';
		
		}
		if (str === 'eleven' ) 
		{
        histr[j] = ' एघार ';
		
		}
		if (str === 'twelve' ) 
		{
        histr[j] = ' बाह्र ';
		
		}
		if (str === 'thirteen' ) 
		{
        histr[j] = ' तेह्र ';
		
		}
		if (str === 'fourteen' ) 
		{
        histr[j] = ' चौध ';
		
		}
		if (str === 'fifteen' ) 
		{
        histr[j] = ' पन्ध्र ';
		
		}
		if (str === 'sixteen' ) 
		{
        histr[j] = ' सोह्र ';
		
		}
		if (str === 'seventeen' ) 
		{
        histr[j] = ' सत्र ';
		
		}
		if (str === 'eighteen' ) 
		{
        histr[j] = ' अठार ';
		
		}
		if (str === 'nineteen' ) 
		{
        histr[j] = ' उन्नाइस ';
		
		}
		if (str === 'twenty' ) 
		{
			
			
			 if (str1 === 'one' )
			{
				histr[j] = ' एक्काइस ';
				
			}
			else if (str1 === 'two' )
			{
				histr[j] = ' बाईस ';
				
			}
			else if (str1 === 'three' )
			{
				histr[j] = ' तेईस ';
				
			}
			else if (str1 === 'four' )
			{
				histr[j] = ' चौबीस ';
				
			}
			else if (str1 === 'five' )
			{
				histr[j] = ' पच्चीस ';
				
			}
			else if (str1 === 'six' )
			{
				histr[j] = ' छब्बीस ';
				
			}
			else if (str1 === 'seven' )
			{
				histr[j] = ' सत्ताईस ';
				
			}
			else if (str1 === 'eight' )
			{
				histr[j] = ' अट्ठाइस ';
				
			}
			else if (str1 === 'nine' )
			{
				histr[j] = ' उनतीस ';
				
			}
			
			else 
			{
				histr[j] = ' बीस ';
				i--;
			}
			
			i++;
		}
	
			
		if (str === 'thirty' ) 
		{
			
			if (str1 === 'one' )
			{
				histr[j] = ' एकत्तिस ';
				
			}
			else if (str1 === 'two' )
			{
				histr[j] = ' बत्तीस ';
				
			}
			else if (str1 === 'three' )
			{
				histr[j] = ' तैंतीस ';
				
			}
			else if (str1 === 'four' )
			{
				histr[j] = ' चौंतीस ';
				
			}
			else if (str1 === 'five' )
			{
				histr[j] = ' पैंतीस ';
				
			}
			else if (str1 === 'six' )
			{
				histr[j] = ' छत्तीस ';
				
			}
			else if (str1 === 'seven' )
			{
				histr[j] = ' सैंतीस ';
				
			}
			else if (str1 === 'eight' )
			{
				histr[j] = ' अठतीस ';
				
			}
			else if (str1 === 'nine' )
			{
				histr[j] = ' उनन्चालीस ';
				
			}
			else
			{
				histr[j] = ' तीस ';
				i--;
			}
			i++;
		}
		if (str === 'forty' ) 
		{
			if (str1 === 'one' )
			{
				histr[j] = ' एकचालीस ';
				
			}
			else if (str1 === 'two' )
			{
				histr[j] = ' बयालीस ';
				
			}
			else if (str1 === 'three' )
			{
				histr[j] = ' त्रियालीस ';
				
			}
			else if (str1 === 'four' )
			{
				histr[j] = ' चवालीस ';
			
			}
			else if (str1 === 'five' )
			{
				histr[j] = ' पैंतालीस ';
				
			}
			else if (str1 === 'six' )
			{
				histr[j] = ' छयालीस ';
				
			}
			else if (str1 === 'seven' )
			{
				histr[j] = ' सच्चालीस ';
				
			}
			else if (str1 === 'eight' )
			{
				histr[j] = ' अठचालीस ';
				
			}
			else if (str1 === 'nine' )
			{
				histr[j] = ' उनन्चास ';
				
			}
			else
			{
				histr[j] = ' चालीस ';
				i--;
			}
			i++;
		}
		if (str === 'fifty' ) 
		{
			if (str1 === 'one' )
			{
				histr[j] = ' एकाउन्न';
				
			}
			else if (str1 === 'two' )
			{
				histr[j] = ' बाउन्न ';
				
			}
			else if (str1 === 'three' )
			{
				histr[j] = ' त्रिपन्न ';
				
			}
			else if (str1 === 'four' )
			{
				histr[j] = ' चउन्न ';
				
			}
			else if (str1 === 'five' )
			{
				histr[j] = ' पचपन्न ';
				
			}
			else if (str1 === 'six' )
			{
				histr[j] = ' छपन्न ';
				
			}
			else if (str1 === 'seven' )
			{
				histr[j] = ' सन्ताउन्न ';
			
			}
			else if (str1 === 'eight' )
			{
				histr[j] = ' अन्ठाउन्न ';
				
			}
			else if (str1 === 'nine' )
			{
				histr[j] = ' उनन्साठी ';
				
			}
			else
			{
				histr[j] = ' पचास ';
				i--;
			}
			i++;
		}
		if (str === 'sixty' ) 
		{
			if (str1 === 'one' )
			{
				histr[j] = ' एकसट्ठी ';
				
			}
			else if (str1 === 'two' )
			{
				histr[j] = ' बसट्ठी ';
				
			}
			else if (str1 === 'three' )
			{
				histr[j] = ' त्रिसट्ठी ';
				
			}
			else if (str1 === 'four' )
			{
				histr[j] = ' चौंसट्ठी ';
			
			}
			else if (str1 === 'five' )
			{
				histr[j] = ' पैंसट्ठी ';
			
			}
			else if (str1 === 'six' )
			{
				histr[j] = ' छयसट्ठी ';
				
			}
			else if (str1 === 'seven' )
			{
				histr[j] = ' सतसट्ठी ';
				
			}
			else if (str1 === 'eight' )
			{
				histr[j] = ' अठसट्ठी ';
				
			}
			else if (str1 === 'nine' )
			{
				histr[j] = ' उनन्सत्तरी ';
				
			}
			else
			{
				histr[j] = ' साठी ';
				i--;
			}
			
			i++;
		}
		if (str === 'seventy' ) 
		{
			if (str1 === 'one' )
			{
				histr[j] = ' इकहत्तर';
				
			}
			else if (str1 === 'two' )
			{
				histr[j] = ' बहत्तर ';
			
			}
			else if (str1 === 'three' )
			{
			
				histr[j] = ' त्रिहत्तर ';
			
			}
			else if (str1 === 'four' )
			{
				histr[j] = ' चौहत्तर ';
				
			}
			else if (str1 === 'five' )
			{
				histr[j] = ' पचहत्तर ';
				
			}
			else if (str1 === 'six' )
			{
				histr[j] = ' छयहत्तर ';
				
			}
			else if (str1 === 'seven' )
			{
				histr[j] = ' सतहत्तर ';
				
			}
			else if (str1 === 'eight' )
			{
				histr[j] = ' अठहत्तर ';
				
			}
			else if (str1 === 'nine' )
			{
				histr[j] = ' उनासी ';
			
			}
			else
			{
				histr[j] = ' सत्तरी ';
				i--;
			}
			i++;
		}
		if (str === 'eighty' ) 
		{
			if (str1 === 'one' )
			{
				histr[j] = ' एकासी';
			
			}
			else if (str1 === 'two' )
			{
				histr[j] = ' बयासी ';
				
			}
			else if (str1 === 'three' )
			{
			
				histr[j] = ' त्रियासी ';
				
			}
			else if (str1 === 'four' )
			{
				histr[j] = ' चौरासी ';
				
			}
			else if (str1 === 'five' )
			{
				histr[j] = ' पचासी ';
				
			}
			else if (str1 === 'six' )
			{
				histr[j] = ' छयासी ';
				
			}
			else if (str1 === 'seven' )
			{
				histr[j] = ' सतासी ';
				
			}
			else if (str1 === 'eight' )
			{
				histr[j] = ' अठासी ';
			
			}
			else if (str1 === 'nine' )
			{
				histr[j] = ' उनान्नब्बे ';
			
			}
			else
			{
				histr[j] = ' असी ';
				i--;
			}
			i++;
		}
		if (str === 'ninety' ) 
		{
			if (str1 === 'one' )
			{
				histr[j] = ' एकान्नब्बे';
				
			}
			else if (str1 === 'two' )
			{
				histr[j] = ' बयानब्बे ';
			
			}
			else if (str1 === 'three' )
			{
			
				histr[j] = ' त्रियान्नब्बे ';
				
			}
			else if (str1 === 'four' )
			{
				histr[j] = ' चौरान्नब्बे ';
				
			}
			else if (str1 === 'five' )
			{
				histr[j] = ' पन्चानब्बे ';
				
			}
			else if (str1 === 'six' )
			{
				histr[j] = ' छयान्नब्बे ';
				
			}
			else if (str1 === 'seven' )
			{
				histr[j] = ' सन्तान्नब्बे ';
				
			}
			else if (str1 === 'eight' )
			{       
				histr[j] = ' अन्ठान्नब्बे ';
				
			}
			
			else if (str1 === 'nine' )
			{
				histr[j] = ' उनान्सय ';
				
			}
			else
			{
				histr[j] = ' नब्बे ';
				i--;
			}
			
			i++;
		
		}
		j++;
		
	}
		
	//} 
	/*if(z == 1)
	{
		//
		var words1 = ws1.split(" ");
		alert(words1);
		
	//
		
	}// end of z == 0 else condition*/
	
		
	for (q = 0; q < histr.length; q++) 
	{
         result += histr[q];
    }
	document.getElementById('container4').value = result;
	
	
}
			
