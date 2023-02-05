import './style.css';

function Footer() {
    return (
        <>
<footer class="container-fluid bg-dark p-5">
  <div class="row">
    <div class="col-md-4 text-center">
      <h5 class="text-white font-weight-bold mb-4">SOBRE NÓS</h5>
      <p class="text-white">O Advogado Dorival Calazans está aqui para ajudar você a ter o melhor resultado possível em suas questões legais.</p>
    </div>
    <div class="col-md-4 text-center">
      <h5 class="text-white font-weight-bold mb-4">SERVIÇOS</h5>
      <ul class="list-unstyled">
        <li><a href="#banner" class="text-white">Consultoria Jurídica</a></li>
        <li><a href="#banner" class="text-white">Elaboração de Contratos</a></li>
        <li><a href="#banner" class="text-white">Assessoria Jurídica</a></li>
        <li><a href="#banner" class="text-white">Defesa em Processos</a></li>
      </ul>
    </div>
    <div class="col-md-4 text-center">
      <h5 class="text-white font-weight-bold mb-4">CONTATO</h5>
      <ul class="list-unstyled">
        <li><a href="mailto:contato@dorivalcalazans.com.br" class="text-white">contato@dorivalcalazans.com.br</a></li>
        <li><a href="tel:+5511988776655" class="text-white">(11) 98877-6655</a></li>
      </ul>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col-md-12 text-center">
      <p class="text-white">&copy; Dorival Calazans - 2023 Todos os Direitos Reservados</p>
    </div>
  </div>
</footer>
        </>
    )
}

export default Footer;