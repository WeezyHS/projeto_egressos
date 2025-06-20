'use client';

//app/instituicao/cursos
import React, { useEffect, useState } from 'react';

interface Curso {
  id: number;
  nome: string;
}

export default function CursosAlunosPage() {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [cursosFiltrados, setCursosFiltrados] = useState<Curso[]>([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [filtroNome, setFiltroNome] = useState("");

  useEffect(() => {
    buscarCursos();
  }, []);

  useEffect(() => {
    filtrarCursos();
  }, [cursos, pagina, filtroNome]);

  const buscarCursos = async () => {
    try {
      const response = await fetch('/api/instituicao/buscar_cursos');
      if (response.ok) {
        const data = await response.json();
        setCursos(data);
      } else {
        console.error('Erro ao buscar cursos');
      }
    } catch (error) {
      console.error('Erro ao buscar cursos:', error);
    }
  };

  const filtrarCursos = () => {
    const filtrados = cursos.filter((curso) =>
      curso.nome.toLowerCase().includes(filtroNome.toLowerCase())
    );

    const cursosPorPagina = 10;
    setTotalPaginas(Math.ceil(filtrados.length / cursosPorPagina));
    const inicio = (pagina - 1) * cursosPorPagina;
    const fim = pagina * cursosPorPagina;
    setCursosFiltrados(filtrados.slice(inicio, fim));
  };

  const handleAnterior = () => {
    setPagina((p) => Math.max(p - 1, 1));
  };

  const handleProximo = () => {
    setPagina((p) => Math.min(p + 1, totalPaginas));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Lista de Cursos</h1>

      <input
        type="text"
        placeholder="Filtrar por nome do curso"
        className="border p-2 rounded mb-4 w-full"
        value={filtroNome}
        onChange={(e) => {
          setPagina(1); // resetar a paginação ao filtrar
          setFiltroNome(e.target.value);
        }}
      />

      {cursosFiltrados.length === 0 ? (
        <p>Nenhum curso encontrado.</p>
      ) : (
        <ul className="bg-white rounded shadow divide-y">
          {cursosFiltrados.map((curso) => (
            <li key={curso.id} className="p-4">
              {curso.nome}
            </li>
          ))}
        </ul>
      )}

      <div className="flex justify-between mt-4">
        <button
          onClick={handleAnterior}
          disabled={pagina === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span>
          Página {pagina} de {totalPaginas}
        </span>
        <button
          onClick={handleProximo}
          disabled={pagina === totalPaginas}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Próximo
        </button>
      </div>
    </div>
  );
}
