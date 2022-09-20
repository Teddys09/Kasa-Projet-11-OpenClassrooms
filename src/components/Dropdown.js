import arrowDown from '../assets/icons/arrow_down.svg';

const Dropdown = (name) => {
  let isClickedDescription = false;
  function handleClickDescription() {
    isClickedDescription = !isClickedDescription;
    if (isClickedDescription) {
      let content = document.querySelector('.description');
      content.classList.toggle('active');
    } else {
      let content = document.querySelector('.description');
      content.classList.toggle('active');
    }
  }
  function handleClickEquipments() {
    isClickedDescription = !isClickedDescription;
    if (isClickedDescription) {
      let content = document.querySelector('.equipments');
      content.classList.toggle('active');
    } else {
      let content = document.querySelector('.equipments');
      content.classList.toggle('active');
    }
  }

  if (name.name === 'Description') {
    return (
      <div className="dropdown">
        <div className="dropdown-title">
          <h2>{name.name}</h2>
          <div className="arrow-dropdown">
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
          <div className="arrow-dropdown">
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
  }
};

export default Dropdown;
