import arrowDown from '../assets/icons/arrow_down.svg';

const Dropdown = (name) => {
  let isClickedDescription = false;
  function handleClickDescription() {
    isClickedDescription = !isClickedDescription;
    if (isClickedDescription) {
      let content = document.querySelector('.description');
      content.classList.toggle('active');
      let arrow = document.querySelector('.arrow-description');
      arrow.classList.toggle('rotate');
    } else {
      let content = document.querySelector('.description');
      content.classList.toggle('active');
      let arrow = document.querySelector('.arrow-description');
      arrow.classList.toggle('rotate');
    }
  }
  function handleClickEquipments() {
    isClickedDescription = !isClickedDescription;
    if (isClickedDescription) {
      let content = document.querySelector('.equipments');
      content.classList.toggle('active');
      let arrow = document.querySelector('.arrow-equipments');
      arrow.classList.toggle('rotate');
    } else {
      let content = document.querySelector('.equipments');
      content.classList.toggle('active');
      let arrow = document.querySelector('.arrow-equipments');
      arrow.classList.toggle('rotate');
    }
  }

  function handleClickAbout(className) {
    isClickedDescription = !isClickedDescription;
    if (isClickedDescription) {
      let content = document.querySelector('.' + className);
      content.classList.toggle('active');
      let arrow = document.querySelector(`.arrow-${className}`);
      arrow.classList.toggle('rotate');
    } else {
      let content = document.querySelector('.' + className);
      content.classList.toggle('active');
      let arrow = document.querySelector(`.arrow-${className}`);
      arrow.classList.toggle('rotate');
    }
  }

  if (name.name === 'Description') {
    return (
      <div className="dropdown">
        <div className="dropdown-title">
          <h2>{name.name}</h2>
          <div className="arrow-dropdown arrow-description">
            <img
              src={arrowDown}
              alt="arrow down"
              onClick={() => handleClickDescription()}
            />
          </div>
        </div>
        <div className="dropdown-content description">
          <p>{name.content}</p>
        </div>
      </div>
    );
  } else if (name.name === 'Equipements') {
    return (
      <div className="dropdown">
        <div className="dropdown-title">
          <h2>{name.name}</h2>
          <div className="arrow-dropdown arrow-equipments">
            <img
              src={arrowDown}
              alt="arrow down"
              onClick={() => handleClickEquipments()}
            />
          </div>
        </div>
        <div className="dropdown-content equipments">
          <ul>
            {name.content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else if (
    name.name === 'Fiabilité' ||
    name.name === 'Respect' ||
    name.name === 'Service' ||
    name.name === 'Responsabilité'
  ) {
    let selector = name.name;
    return (
      <div className="dropdown">
        <div className="dropdown-title">
          <h2>{name.name}</h2>
          <div className={'arrow-dropdown arrow-' + name.name}>
            <img
              src={arrowDown}
              alt="arrow down"
              onClick={() => handleClickAbout(selector)}
            />
          </div>
        </div>
        <div className={'dropdown-content ' + name.name}>
          <p>{name.content}</p>
        </div>
      </div>
    );
  }
};

export default Dropdown;
