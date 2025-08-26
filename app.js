const express = require('express');
const path = require('path');
const app = express();

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Dados de exemplo

const alunos = [
  { id: 1, nome: 'Maria' },
  { id: 2, nome: 'João' }
];

const cursos = [
  { id: 1, nome: 'NodeJS Básico' },
  { id: 2, nome: 'Bootstrap Avançado' }
];

// Rotas
app.get('/', (req, res) => res.render('index'));
app.get('/alunos', (req, res) => res.render('alunos/listar', { alunos }));
app.get('/cursos', (req, res) => res.render('cursos/listar', { cursos }));
app.get('/equipe', (req, res) => res.render('equipe', { equipe }));

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});