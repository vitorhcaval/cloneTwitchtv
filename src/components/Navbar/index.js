import React from 'react';

import { BsTwitch } from 'react-icons/bs';
import { MdMoreVert } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { TbCrown } from 'react-icons/tb';
import { RxPerson } from 'react-icons/rx';

import { Container } from './styles';

function Navbar() {


  return (
    <Container>
      <div className='first'>
        <div className='icon-tw'>
        <BsTwitch />
        </div>
        <div className='procurar'>
        <p>Procurar</p>
        </div>
        <div className='more'>
          <button>
            <MdMoreVert />
          </button>
        </div>
      </div>
      <div className='second'>
        <div className='search'>
        <input type="text" id='search' name='search' placeholder='Buscar' />
        </div>
        <button><FiSearch /></button>
      </div>
      <div className='third'>
        <div className='prime'>
          <button>
            <p>11</p>
            <TbCrown />
          </button>
        </div>
        <div className='entrar'>
          <button>Entrar</button>
        </div>
        <div className="cadastrar">
          <button>
            Cadastrar-se
          </button>
        </div>
        <div className="login">
          <button>
            <RxPerson />
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;