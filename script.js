function generateWorksheet() {
  const topic = document.getElementById("topic").value;
  const count = parseInt(document.getElementById("count").value);
  const worksheet = document.getElementById("worksheet");
  worksheet.innerHTML = "<h2>Worksheet</h2>";

  for (let i = 0; i < count; i++) {
    let a = Math.floor(Math.random() * 50);
    let b = Math.floor(Math.random() * 50);
    let question = "";

    switch (topic) {
      case "addition":
        question = `${a} + ${b} = ______`;
        break;
      case "subtraction":
        if (a < b) [a, b] = [b, a];
        question = `${a} - ${b} = ______`;
        break;
      case "multiplication":
        a = Math.floor(Math.random() * 10);
        b = Math.floor(Math.random() * 10);
        question = `${a} × ${b} = ______`;
        break;
      case "division":
        b = Math.floor(Math.random() * 9) + 1;
        a = b * Math.floor(Math.random() * 10);
        question = `${a} ÷ ${b} = ______`;
        break;
    }

    const p = document.createElement("p");
    p.textContent = `${i + 1}. ${question}`;
    worksheet.appendChild(p);
  }
}

function generateDailyChallenge() {
  const worksheet = document.getElementById("worksheet");
  worksheet.innerHTML = `<h2>Daily Challenge – ${new Date().toDateString()}</h2>`;

  const topics = [
    { type: "addition", count: 3 },
    { type: "subtraction", count: 3 },
    { type: "multiplication", count: 2 },
    { type: "division", count: 2 }
  ];

  let questionNumber = 1;

  topics.forEach(({ type, count }) => {
    for (let i = 0; i < count; i++) {
      let a = Math.floor(Math.random() * 50);
      let b = Math.floor(Math.random() * 50);
      let question = "";

      switch (type) {
        case "addition":
          question = `${a} + ${b} = ______`;
          break;
        case "subtraction":
          if (a < b) [a, b] = [b, a];
          question = `${a} - ${b} = ______`;
          break;
        case "multiplication":
          a = Math.floor(Math.random() * 10);
          b = Math.floor(Math.random() * 10);
          question = `${a} × ${b} = ______`;
          break;
        case "division":
          b = Math.floor(Math.random() * 9) + 1;
          a = b * Math.floor(Math.random() * 10);
          question = `${a} ÷ ${b} = ______`;
          break;
      }

      const p = document.createElement("p");
      p.textContent = `${questionNumber++}. ${question}`;
      worksheet.appendChild(p);
    }
  });
}
function downloadWorksheet() {
  const content = document.getElementById("worksheet").innerHTML;
  const win = window.open("", "", "width=800,height=600");
  win.document.write(`
    <html>
      <head>
        <title>Math Worksheet</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h2 { text-align: center; }
          p { font-size: 18px; margin: 10px 0; }
        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `);
  win.document.close();
  win.print();
}
