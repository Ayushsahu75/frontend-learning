const questionBank = [
    { question: "Who has the most centuries in international cricket?", options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"], answer: "Sachin Tendulkar" },
    { question: "Which country has won the most Cricket World Cups?", options: ["India", "Australia", "England", "West Indies"], answer: "Australia" },
    { question: "Who was the first player to score a double century in ODIs?", options: ["Virender Sehwag", "Rohit Sharma", "Chris Gayle", "Sachin Tendulkar"], answer: "Sachin Tendulkar" },
    { question: "Which bowler has taken the most wickets in Test cricket?", options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"], answer: "Muttiah Muralitharan" },
    { question: "Which team won the first T20 World Cup?", options: ["India", "Pakistan", "Australia", "West Indies"], answer: "India" },
    { question: "Who has scored the highest individual score in ODIs?", options: ["Rohit Sharma", "Martin Guptill", "Virender Sehwag", "Chris Gayle"], answer: "Rohit Sharma" },
    { question: "Who is known as the 'Rawalpindi Express'?", options: ["Shoaib Akhtar", "Wasim Akram", "Waqar Younis", "Imran Khan"], answer: "Shoaib Akhtar" },
    { question: "Who captained India in the 1983 World Cup?", options: ["Kapil Dev", "Sunil Gavaskar", "Mohinder Amarnath", "Ravi Shastri"], answer: "Kapil Dev" },
    { question: "Which cricketer is nicknamed 'The Wall'?", options: ["Rahul Dravid", "Anil Kumble", "VVS Laxman", "Sourav Ganguly"], answer: "Rahul Dravid" },
    { question: "Which batsman has the most runs in Test cricket?", options: ["Sachin Tendulkar", "Ricky Ponting", "Jacques Kallis", "Brian Lara"], answer: "Sachin Tendulkar" },
    { question: "Which player hit six sixes in an over in T20 internationals?", options: ["Yuvraj Singh", "Chris Gayle", "Kieron Pollard", "Andre Russell"], answer: "Yuvraj Singh" },
    { question: "Where is the ICC headquarters located?", options: ["Dubai", "London", "Mumbai", "Melbourne"], answer: "Dubai" },
    { question: "Which team is known as the Proteas?", options: ["South Africa", "New Zealand", "England", "Sri Lanka"], answer: "South Africa" },
    { question: "Which Indian cricketer is known as 'Captain Cool'?", options: ["MS Dhoni", "Virat Kohli", "Rohit Sharma", "Kapil Dev"], answer: "MS Dhoni" },
    { question: "Who won the 2019 Cricket World Cup?", options: ["England", "New Zealand", "India", "Australia"], answer: "England" },
    { question: "Which cricketer has hit the most sixes in international cricket?", options: ["Chris Gayle", "MS Dhoni", "Rohit Sharma", "Shahid Afridi"], answer: "Chris Gayle" },
    { question: "Who was the first Indian to take a hat-trick in Test cricket?", options: ["Harbhajan Singh", "Kapil Dev", "Anil Kumble", "Jasprit Bumrah"], answer: "Harbhajan Singh" },
    { question: "Who has the most wickets in ODIs?", options: ["Muttiah Muralitharan", "Wasim Akram", "Glenn McGrath", "Anil Kumble"], answer: "Muttiah Muralitharan" },
    { question: "Which Indian batsman scored 973 runs in a single IPL season?", options: ["Virat Kohli", "David Warner", "KL Rahul", "AB de Villiers"], answer: "Virat Kohli" },
    { question: "Who is the only bowler to take 10 wickets in a Test innings for India?", options: ["Anil Kumble", "Harbhajan Singh", "Jasprit Bumrah", "Ishant Sharma"], answer: "Anil Kumble" },
    { question: "Who was the first cricketer to hit 100 international centuries?", options: ["Sachin Tendulkar", "Ricky Ponting", "Virat Kohli", "Kumar Sangakkara"], answer: "Sachin Tendulkar" },
    { question: "Which country hosted the 2007 Cricket World Cup?", options: ["West Indies", "Australia", "India", "South Africa"], answer: "West Indies" },
    { question: "Who is known for the 'Helicopter Shot'?", options: ["MS Dhoni", "Virat Kohli", "Suresh Raina", "Hardik Pandya"], answer: "MS Dhoni" },
    { question: "What is the maximum number of overs in an ODI match?", options: ["50", "40", "60", "20"], answer: "50" },
    { question: "Which player has scored 4 centuries in a single World Cup?", options: ["Kumar Sangakkara", "Rohit Sharma", "David Warner", "Virat Kohli"], answer: "Kumar Sangakkara" },
    { question: "Which team is called the 'Black Caps'?", options: ["New Zealand", "South Africa", "England", "West Indies"], answer: "New Zealand" },
    { question: "Who won the Orange Cap in IPL 2023?", options: ["Shubman Gill", "Faf du Plessis", "Devdutt Padikkal", "Virat Kohli"], answer: "Shubman Gill" },
    { question: "Which format is used in the World Test Championship?", options: ["Test", "ODI", "T20", "100-ball"], answer: "Test" },
    { question: "Who is the fastest bowler to reach 100 ODI wickets?", options: ["Rashid Khan", "Shaheen Afridi", "Mitchell Starc", "Jasprit Bumrah"], answer: "Rashid Khan" },
    { question: "Which Indian cricketer has taken a double hat-trick in T20s?", options: ["Deepak Chahar", "Bhuvneshwar Kumar", "T Natarajan", "Harshal Patel"], answer: "Deepak Chahar" },
    { question: "Who is known as the 'Universe Boss'?", options: ["Chris Gayle", "Kieron Pollard", "Andre Russell", "Dwayne Bravo"], answer: "Chris Gayle" },
    { question: "Which cricketer holds the record for fastest 50 in ODIs?", options: ["AB de Villiers", "Yuvraj Singh", "Corey Anderson", "Sanath Jayasuriya"], answer: "AB de Villiers" },
    { question: "Which Indian pacer made his debut in 2016 and became a star death bowler?", options: ["Jasprit Bumrah", "Bhuvneshwar Kumar", "Mohammed Shami", "Umesh Yadav"], answer: "Jasprit Bumrah" },
    { question: "Who was the first captain of Indian Test team?", options: ["CK Nayudu", "Lala Amarnath", "Nawab of Pataudi", "Vijay Hazare"], answer: "CK Nayudu" },
    { question: "Which stadium is known as 'Home of Cricket'?", options: ["Lord's", "MCG", "Eden Gardens", "Wankhede"], answer: "Lord's" },
    { question: "Who hit the winning six in the 2011 World Cup final?", options: ["MS Dhoni", "Yuvraj Singh", "Gautam Gambhir", "Virat Kohli"], answer: "MS Dhoni" },
    { question: "Who was the youngest player to debut for India in international cricket?", options: ["Sachin Tendulkar", "Parthiv Patel", "Ishant Sharma", "Prithvi Shaw"], answer: "Sachin Tendulkar" },
    { question: "Which bowler holds the record for most wickets in a single World Cup edition?", options: ["Mitchell Starc", "Glenn McGrath", "Zaheer Khan", "Malinga"], answer: "Mitchell Starc" },
    { question: "What’s the name of the cricket tournament held among Asian nations?", options: ["Asia Cup", "Champions Trophy", "Tri-Series", "Border-Gavaskar Trophy"], answer: "Asia Cup" }
];

function RandomQuestion(){
    const answer = [];
    

    const data = new set();
    while(data.size!=10){
        const index = Math.floor(Math.random()*40);
        data.add(questionBank[index]);

    }
    return [...data];
}
const form = document.querySelector('form');

const problem = RandomQuestion();


problem.forEach((obj , index)=>{
    const div_element = document.createElement('div');
    div_element.className = 'question';
    
    const para = document.createElement('p');
    
    para.textContent = `${index + 1}, ${obj.question}`;

    
    div_element.appendChild(para);


obj['options'].forEach((data)=>{
    const label =  document.createElement('label');
    const input = document.createElement('input');
    input.type = "radio";
    input.name = `q${index+1}`;
    input.value = data;
    
    label.appendChild(input);
    label.appendChild(document.createTextNode(data));
    div_element.appendChild(label);
    div_element.appendChild(document.createElement('br'));
 })


 form.appendChild(div_element);


})
