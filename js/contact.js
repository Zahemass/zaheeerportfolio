// Get the input fields and output elements
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const messageInput = document.getElementById('messageInput');
const nameOutput = document.getElementById('nameOutput');
const emailOutput = document.getElementById('emailOutput');
const messageOutput = document.getElementById('messageOutput');

// Add event listeners to the input fields
nameInput.addEventListener('input', updateNameOutput);
emailInput.addEventListener('input', updateEmailOutput);
messageInput.addEventListener('input', updateMessageOutput);

// Functions to update the output values
function updateNameOutput() {
    nameOutput.textContent = nameInput.value.trim() === '' ? 'XXX' : nameInput.value;
}

function updateEmailOutput() {
    emailOutput.textContent = emailInput.value.trim() === '' ? 'YYY' : emailInput.value;
}

function updateMessageOutput() {
    messageOutput.textContent = messageInput.value.trim() === '' ? 'XXX YYY ZZZ' : messageInput.value;
}

//background particle
class About extends React.Component {
    render() {
      return(
          React.createElement("h1", null, this.props.name),
          
        React.createElement("div", { className: "about",role:"eve"}));
    }}
  class Header extends React.Component {
    constructor() {
      super();
      this.state = {contentStyle: {left: '0px',top: '0px' } };
      this.mouseOver = this.mouseOver.bind(this);}
    mouseOver(e) {
      this.setState({contentStyle: {left: e.pageX / 100 + 'px',top: e.pageY / 100 + 'px' } });}
    render() {
      return(
        React.createElement("div", { className: "header", onMouseMove: this.mouseOver }, 
        React.createElement("div", { id: "particles-js" }),
        React.createElement("div", { className: "content-wrapper" }, 
        React.createElement("div", { className: "content", style: this.state.contentStyle },
        React.createElement("h1", null, this.props.name),
        React.createElement("p", null, this.props.role), 
        React.createElement("b", null, this.props.a), 
        React.createElement("p", null, this.props.b), 
        React.createElement("a", { href: "https://www.instagram.com/oguzhan_cart/", className: this.props.firstIcon }), 
        React.createElement("a", { href: "https://codepen.io/oguzhan1881/", className: this.props.secondIcon }),
        React.createElement("a", { href: "https://tr.linkedin.com/in/o%C4%9Fuzhan-%C3%A7art-b73405199", className: this.props.fiveIcon }),
        React.createElement("a", { href: "https://github.com/oguzhan18", className: this.props.thirdIcon })))));
      }}
  class App extends React.Component {
    render() {
      return(
        React.createElement("div", null,
        React.createElement(Header, {}), 
                      React.createElement(About, null)));}}
                      ReactDOM.render(React.createElement(App, null),document.getElementById('app'));
                      Hammer(document.querySelector('.header')).on('swipeleft', () => {
                      document.querySelector('.about').style.left = '0';
                      });
                      Hammer(document.querySelector('.about')).on('swiperight', () => {
                      document.querySelector('.about').style.left = '100vw';
                      });
               particlesJS("particles-js", 
                  {
                      "particles": {
                      "number": {
                      "value": 200,
                      "density": {
                      "enable": true,
                      "value_area": 3156.5905665290907 } },
                      "color": {
                      "value": "#F4CE0A" },
                      "shape": {
                      "type": "circle",
                      "stroke": {
                      "width": 6,
                      "color": "#ff204e" },   
                      "polygon": {
                      "nb_sides": 4 },
                      "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100 } },
                      "opacity": {
                      "value": 1,
                      "random": false,
                      "anim": {
                      "enable": false,
                      "speed": 0.1,
                      "opacity_min": 0.1,
                      "sync": false } },
                      "size": {
                      "value": 1,
                      "random": true,
                      "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false } },
                      "line_linked": {
                      "enable": true,
                      "distance": 150,
                      "color": "#ff204e",
                      "opacity": 0.4,
                      "width": 1 },
                      "move": {
                      "enable": true,
                      "speed": .5,
                      "direction": "none",
                      "random": false,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200 } } },
                      "interactivity": {
                      "detect_on": "canvas",
                      "events": {
                      "onhover": {
                      "enable": true,
                      "mode": "repulse" },
                      "onclick": {
                      "enable": true,
                      "mode": "push" },
                      "resize": true },
                      "modes": {
                      "grab": {
                      "distance": 400,
                      "line_linked": {
                      "opacity": 1 } },
                      "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3 },
                      "repulse": {
                      "distance": 200,
                      "duration": 0.4 },
                      "push": {
                      "particles_nb": 4 },
                      "remove": {
                      "particles_nb": 2 } } },
                      "retina_detect": true });
          var count_particles, stats, update;
              stats = new Stats();
              stats.setMode(0);
              stats.domElement.style.position = 'absolute';
              stats.domElement.style.left = '0px';
              stats.domElement.style.top = '0px';
              document.body.appendChild(stats.domElement);
              count_particles = document.querySelector('.js-count-particles');
                  update = function () {
                      stats.begin();
                      stats.end();
                          if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
                              count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;}
              requestAnimationFrame(update);};
              requestAnimationFrame(update);;


              