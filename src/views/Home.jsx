import 'bootstrap/dist/css/bootstrap.css';
import styles from './Home.module.css';

const Home = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailInput = document.getElementById('exampleInputEmail1');
    const messageInput = document.getElementById('messageInput');

    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!email || !message) {
      alert('Por favor rellena ambos campos');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert('Email invalido');
      return;
    }

    const subject = 'Hola desde nuestro sitio web!';
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
    <h1>Bienvenido a nuestra página de contacto!</h1>
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">Tu email no sera compartido ni almacenado.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="messageInput" className="form-label">Mensaje</label>
        <input type="text" className="form-control" id="messageInput" aria-describedby="messageHelp" />
        <div id="messageHelp" className="form-text">Escribe aquí tu mensaje</div>
      </div>

      <button type="submit" className="btn btn-primary">Listo 👌</button>
    </form>
    <footer>Escribe el correo destinatario, luego el mensaje, al terminar el borrador se abrirá tu mail para que puedas enviarlo</footer>
    </>
  );
};

export default Home;