# Javascript Quiz
---------------------------------------------------------------
#### This is a simple online JavaScript quiz, 25/September/2018
---------------------------------------------------------------
#### Author
  **Benson w. Okwara**
---------------------------------------------------------------
## DESCRIPTION
Once you click the image on the front-end page, it will launch you to simple JavaScript questions.They are 6 in numbers and each question carries (16 mks). After successful completion of the questions, scores will be tabulated and the results will be displayed on a new page in %.
## INSTALLATION REQUIREMENTS
Your device needs to have the following Installations:
* Smartphone or laptop
* git clone  https://github.com/BenOkwara/Quiz-Board.git
* atom
* code
* Internet access
## KNOWN BUGS
  none  
## TECHNOLOGIES USED
     * HTML
     * CSS
     * jQuery
     * JavaScript (I have used, _Bootstrap_ thumbnail as a link to access the quiz section)

## BDD
| Behaviour   |      Input     |  Output |
|----------|:-------------:|------:|
| User does not enter name |  "" | Please ENTER name.Form does not appear |
| User enters name |    "Example"   |   The form will appear |
| User answers all questions wrong | 0,0,0,0,0,0 |    Nice try{name},your score is 0 |
| User answers 1 question correct | 10,0,0,0,0,0 |    Nice try{name},your score is 10 |
| User answers 2 questions correct | 10,10,0,0,0,0 |    Nice try{name},your score is 20 |
| User answers 3 questions correct | 10,10,10,0,0,0 |    Nice try{name},your score is 30 |
| User answers 4 questions correct | 10,10,10,10,0,0 |    Congratulations {name},your score is 40 |
| User answers 5 questions correct | 0,10,10,10,10,10 |    Congratulations {name},your score is 50 |
| User answers all questions correct | 10,10,10,10,10,10 |    Congratulations {name},your score is 60 |
| If the user does not answer a question, it is marked as wrong | 10,10,10,10,10,"" |    Congratulations{name},your score is 50 |

## SUPPORT AND CONTACT CHANNELS
Anyone with questions to ask, ideas or concerns, you can hit me-up
:phone: 0705816180    :inbox_tray: wawerubenson47@gmail.com

### LICENSE
[MIT License](https://choosealicense.com/licenses/mit/#)


__copyright :copyright: 2008 gen.co.__
