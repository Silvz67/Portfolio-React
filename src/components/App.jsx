import React, { useState, useEffect } from "react";
import "../css/App.css";

function App() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tema, setTema] = useState(() => localStorage.getItem('tema') || 'light');
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    if (tema === 'light') {
      document.body.classList.add('tema-claro');
    } else {
      document.body.classList.remove('tema-claro');
    }
    localStorage.setItem('tema', tema);
  }, [tema]);

  const alternarTema = () => setTema(tema === 'light' ? 'dark' : 'light');

  // Fecha o menu ao clicar em um link (mobile)
  const handleMenuClick = () => setMenuAberto(false);

  function enviarMensagem(event) {
    event.preventDefault();
    const telefone = '5582996117038';
    const texto = `Olá, meu nome é *${nome}*, ${mensagem}`;
    const msgformatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgformatada}`;
    window.open(url, '_blank');
  }

  return (
    <>
      <nav className="navegacao">
        <div className="container-nav">
          <div className="logo">
            <a href="https://github.com/Silvz67" target="_blank" rel="noopener noreferrer">
              <img className="logo-git-anim" src="/imagens/icon-git.png" alt="github" />
            </a>
          </div>
          <button className="hamburguer" onClick={() => setMenuAberto(!menuAberto)} aria-label="Abrir menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className={`menu${menuAberto ? ' aberto' : ''}`}>
            <li><a className="menu-link" href="#inicio" onClick={handleMenuClick}>Início</a></li>
            <li><a className="menu-link" href="#sobre" onClick={handleMenuClick}>Sobre</a></li>
            <li><a className="menu-link" href="#projetos" onClick={handleMenuClick}>Projetos</a></li>
            <li><a className="menu-link" href="#contato" onClick={handleMenuClick}>Contatos</a></li>
          </ul>
          <button onClick={alternarTema} className="tema-toggle" aria-label="Alternar tema">
            {tema === 'light' ? '🌙' : '🌞'}
          </button>
        </div>
      </nav>

      <header className="cabecalho" id="inicio">
        <img className="foto-perfil" src="/imagens/imgsla.jpeg" alt="Foto de Artur Silva" />
        <h1 className="h1-main">Artur Silva</h1>
        <p className="p main">Desenvolvedor Front-end</p>
      </header>

      <section className="sobre" id="sobre">
        <div className="sobre-caixa">
          <h2 className="sobre-titulo">Quem sou eu?</h2>
          <p className="sobre-paragrafo">
            <strong><span className="destaque-verde">José Artur da Silva</span></strong><br />
            Estudante de Informática para Internet no <strong><span className="destaque-verde">IFAL – Campus Viçosa</span></strong>.<br />
            Sou um desenvolvedor front-end apaixonado por experiências digitais <span className="destaque-verde">incríveis</span>.<br />
            Busco sempre <span className="destaque-verde">aprimorar habilidades</span> e criar <span className="destaque-verde">soluções inovadoras</span> para os desafios dos clientes.
          </p>
        </div>
      </section>

      <section className="Especialidades" id="especialidades">
        <h2 className="especialidades-titulo">Especialidades</h2>
        <div className="imagens-especialidades">
          <div className="especialidade-item">
            <img src="/imagens/logo-html5.png" alt="HTML5" title="HTML5" />
          </div>
          <div className="especialidade-item">
            <img src="/imagens/logo-css3.webp" alt="CSS3" title="CSS3" />
          </div>
          <div className="especialidade-item">
            <img src="/imagens/logo-js.webp" alt="JavaScript" title="JavaScript" />
          </div>
          <div className="especialidade-item">
            <img src="/imagens/logo-react.png" alt="React" title="React" />
          </div>
        </div>
      </section>

      <section className="projetos" id="projetos">
        <h2 className="projetos-titulo">Meus Projetos</h2>
        <div className="projetos-caixa">
          <div className="projetos-card">
            <img className="projetos-imagens" src="/imagens/zvideos.png" alt="Z-videos Lanches" style={{ width: '320px', height: '220px', objectFit: 'cover' }} />
            <div className="caixa-texto-projetos">
              <h3>Z-videos Lanches</h3>
              <p className="paragrafo-projetos">
                Loja virtual de lanches completa e com WhatsApp direto para melhorar o atendimento ao usuário!
              </p>
              <a className="Link-projeto" href="https://z-videos-lanches.vercel.app/" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
            </div>
          </div>
          <div className="projetos-card">
            <img className="projetos-imagens" src="/imagens/eduresumos.png" alt="EduResumos" style={{ width: '320px', height: '220px', objectFit: 'cover' }} />
            <div className="caixa-texto-projetos">
              <h3>EduResumos</h3>
              <p className="paragrafo-projetos">
                Ferramenta para estudantes criarem resumos automáticos, organizar rotina semanal e gerenciar metas.
              </p>
              <a className="Link-projeto" href="https://edu-resumos.vercel.app/" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
            </div>
          </div>
        </div>
      </section>

      <section className="contato" id="contato">
        <h2 className="contato-titulo">Entre em Contato</h2>
        <form className="formulario-contato" onSubmit={enviarMensagem}>
          <input
            className="campo-form"
            type="text"
            id="nome"
            placeholder="Seu nome"
            required
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <input
            className="campo-form"
            type="email"
            placeholder="Seu e-mail"
            required
          />
          <textarea
            className="campo-form"
            id="mensagem"
            placeholder="Sua mensagem"
            required
            value={mensagem}
            onChange={e => setMensagem(e.target.value)}
          ></textarea>
          {nome && (
            <div style={{ marginBottom: '1rem', textAlign: 'left', fontSize: '1.1rem' }}>
              Olá, meu nome é <b>{nome}</b>
            </div>
          )}
          <button className="buttom-form" type="submit">Enviar mensagem</button>
        </form>
      </section>

      <footer>
        <span>© 2024 Artur Silva</span>
      </footer>
    </>
  );
}

export default App;
