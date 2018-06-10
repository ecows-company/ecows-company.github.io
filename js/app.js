function loadPage() {
  const body = document.querySelector('body');
  body.classList.add('active');
}

function animateMenu() {
  const menu = document.querySelector('.top-menu');
  menu.classList.add('active');
}

function animateBtnGroup() {
  const btnGroup = document.querySelector('.top-btn-group');
  btnGroup.classList.add('active')
}

function animateTitle() {
  const title = document.querySelector('.intro');
  title.classList.add('active')
}

function scrollAnimate(arrElements, animateClass) {
  arrElements.forEach(element => {
    const el = document.querySelector(element);
    if (el.getBoundingClientRect().top <= window.innerHeight / 2) {
      el.classList.add(animateClass);
    }
  })
}

function stickyMenu() {
  const menu = document.querySelector('.top-header');
  if (window.pageYOffset > 90) {
    menu.classList.add('floating');
  } else {
    menu.classList.remove('floating');
  }
}

function crazyTooltip() {
  const tooltipButtons = document.querySelectorAll('.sip-technologies .point'),
        heads          = document.querySelectorAll('.slide-out-head .head'),
        toolTips       = document.querySelectorAll('.slide-out-panel .content');


  function activateTooltip(evt) {
    const data = evt.target.dataset.tooltip;
    heads.forEach(head => head.classList.remove('active'));
    toolTips.forEach(toolTip => toolTip.classList.remove('active'));
    heads.forEach(head => {
      if (head.dataset.tooltip === data) {
        head.classList.add('active');
      }
    });
    toolTips.forEach(toolTip => {
      if (toolTip.dataset.tooltip === data) {
        toolTip.classList.add('active');
      }
    });
  }

  tooltipButtons.forEach(btn => btn.addEventListener('click', activateTooltip));
}

window.addEventListener('scroll', function() {
  stickyMenu();
  scrollAnimate(['.projects', '.services'], 'active');
});

window.onload = function ()  {
  crazyTooltip();
  setTimeout(loadPage, 500);
  setTimeout(animateTitle, 1000);
  setTimeout(animateMenu, 1200);
  setTimeout(animateBtnGroup, 2000);
}