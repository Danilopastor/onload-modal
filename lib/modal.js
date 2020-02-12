function modal(param){
    const body = document.body
    let target = param.target
    const elementType = {
      '#' : document.getElementById(target.substr(1)),
      '.' : document.getElementsByClassName(target.substr(1))[0]
    }
    let css = `
    #${target.substr(1)}-box { 
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      background : #00000091;
    }
    #${target.substr(1)}-box .modal-screen{
      position:relative;
      display:flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    #${target.substr(1)}-box .modal-screen .modal-content{
      position: relative;
      width: ${(param.width) ? param.width : 500};
      height: ${(param.height) ? param.height : 400};
      background:${(param.background) ? param.background : 'white'};
      border-radius: ${(param.rounded) ? '10px' : '0'}
    }
    #${target.substr(1)}-box .modal-screen .close-conteiner{
      position: absolute;
      right: 10px;
      top: 10px;
      display:flex;
      align-items: center;
      justify-content: center;
      background:#000;
      color:#fff;
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }
    #${target.substr(1)}-box .modal-screen .close-conteiner .close-icon{
      display: inline-block;
      height: 40px;
      width: 40px;
      cursor: pointer;
      stroke: #fff;
    }
    #${target.substr(1)}-box .modal-screen .close-conteiner .close-icon .circle {
      opacity: 0.1;
    }

    #${target.substr(1)}-box .modal-screen .close-conteiner .close-icon .progress {
      opacity: 1;
      stroke-dasharray: 0,120;
      transition: 0.5s cubic-bezier(0.165, 0.775, 0.145, 1.020);
    }
    #${target.substr(1)}-box .modal-screen .close-conteiner:hover .close-icon .progress{
      opacity: 1;
      stroke-dasharray: 1,120;
    }
    #${target.substr(1)}-box .modal-screen .close-conteiner .close-icon:hover .progress{
      opacity: 1;
      stroke-dasharray: 50,120;
    }
    #${target.substr(1)}-box .modal-screen .close-conteiner .clicked .progress{
      opacity: 1;
      stroke-dasharray:120,120;
    }
    `,
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';

if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
        object = elementType[target[0]]
        object.remove(target);
        document.body.innerHTML += `<div class="${target.substr(1)}" id="${target.substr(1)}-box">
                                      <div class="modal-screen">
                                        <div class="close-conteiner">
                                          <span class="close-icon" id="btn-close">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" enable-background="new 0 0 40 40">
                                              <line x1="15" y1="15" x2="25" y2="25" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10"></line>
                                              <line x1="25" y1="15" x2="15" y2="25" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10"></line>    
                                              <circle class="circle" cx="20" cy="20" r="19" opacity="0" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10" fill="none"></circle>
                                              <path d="M20 1c10.45 0 19 8.55 19 19s-8.55 19-19 19-19-8.55-19-19 8.55-19 19-19z" class="progress" id="progress" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-miterlimit="10" fill="none"></path>
                                            </svg>
                                          </span>
                                        </div>
                                        <div class="modal-content">
                                           ${object.innerHTML}
                                        </div>
                                      </div>
                                    </div>`
        beforeLoad(param)
}
function beforeLoad(param){
  const target = document.getElementById(`${param.target.substr(1)}-box`)
  const btnClose = document.getElementById('btn-close')
  const progress = document.getElementById('progress')
  const timeProgress = (param.time) ? param.time : 100
  let countProgress = 1
  let Progress = setInterval(function(){
    
    if(countProgress >= 120){
      clearInterval(Progress)
      setTimeout(function(){
        target.style.display = 'none'
      },250)
    }
    progress.style.strokeDasharray = `${countProgress},120`;
    countProgress++
  },timeProgress)

  btnClose.addEventListener('click',function(){
    countProgress = 120
  })
}