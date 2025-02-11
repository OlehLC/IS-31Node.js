const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/student/:id', (req, res) => {
    const studentId = req.params.id;
    const students = [
      { id: 1, name: 'Олег', role: 'Тимлід' },
      { id: 2, name: 'Микита', role: 'Розробник' },
      { id: 3, name: 'Катерина', role: 'Дизайнер' }
    ]; 
    const student = students.find(s => s.id == studentId);
    if (!student) {
      return res.status(404).send('Студента не знайдено');
    }
  
    res.render('student', { student });
  });
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});