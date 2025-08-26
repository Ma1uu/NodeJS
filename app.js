const express = require('express');
const path = require('path');
const app = express();

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.get('/', (req, res) => {
  res.render('index');
});

// Categorias
app.get('/categorias', (req, res) => {
  const categorias = [
    { id: 1, nome: 'Programação' },
    { id: 2, nome: 'Design' }
  ];
  res.render('categorias/listar', { categorias });
});

// Alunos
app.get('/alunos', (req, res) => {
  const alunos = [
    { id: 1, nome: 'Maria' },
    { id: 2, nome: 'João' }
  ];
  res.render('alunos/listar', { alunos });
});

// Cursos
app.get('/cursos', (req, res) => {
  const cursos = [
    { id: 1, nome: 'NodeJS Básico' },
    { id: 2, nome: 'Bootstrap Avançado' }
  ];
  res.render('cursos/listar', { cursos });
});

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});