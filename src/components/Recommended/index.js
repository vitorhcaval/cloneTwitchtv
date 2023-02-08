import React from 'react';

import { Container } from './styles';
import { FiLogIn } from 'react-icons/fi'
import profile from '../../assets/70x70.png'

function Recommended() {
  return (
    <Container>
    <div className='title'>
      <p>CANAIS RECOMENDADOS</p>
      <button><FiLogIn /></button>
    </div>
    <div className="canais">
      <div className='perfil'>
          <div className="foto">
            <img src={profile} alt="perfil" />
          </div>
          <div className="infos">
            <div className='name'>
            <p>NomedoCanal</p>
            <span>Just Chating</span>
            </div>
            <div className='spectators'>
              <div>
              <div className='online'></div>
              </div>
              <div>
              <span>200 mil</span> 
              </div>
            </div>
          </div>
      </div>
      
      <div className='perfil'>
          <div className="foto">
            <img src={profile} alt="perfil" />
          </div>
          <div className="infos">
            <div className='name'>
            <p>NomedoCanal</p>
            <span>Just Chating</span>
            </div>
            <div className='spectators'>
              <div>
              <div className='online'></div>
              </div>
              <div>
              <span>200 mil</span> 
              </div>
            </div>
          </div>
      </div>

      <div className='perfil'>
          <div className="foto">
            <img src={profile} alt="perfil" />
          </div>
          <div className="infos">
            <div className='name'>
            <p>NomedoCanal</p>
            <span>Just Chating</span>
            </div>
            <div className='spectators'>
              <div>
              <div className='online'></div>
              </div>
              <div>
              <span>200 mil</span> 
              </div>
            </div>
          </div>
      </div>

      <div className='perfil'>
          <div className="foto">
            <img src={profile} alt="perfil" />
          </div>
          <div className="infos">
            <div className='name'>
            <p>NomedoCanal</p>
            <span>Just Chating</span>
            </div>
            <div className='spectators'>
              <div>
              <div className='online'></div>
              </div>
              <div>
              <span>200 mil</span> 
              </div>
            </div>
          </div>
      </div>

      <div className='perfil'>
          <div className="foto">
            <img src={profile} alt="perfil" />
          </div>
          <div className="infos">
            <div className='name'>
            <p>NomedoCanal</p>
            <span>Just Chating</span>
            </div>
            <div className='spectators'>
              <div>
              <div className='online'></div>
              </div>
              <div>
              <span>200 mil</span> 
              </div>
            </div>
          </div>
      </div>

      <div className='perfil'>
          <div className="foto">
            <img src={profile} alt="perfil" />
          </div>
          <div className="infos">
            <div className='name'>
            <p>NomedoCanal</p>
            <span>Just Chating</span>
            </div>
            <div className='spectators'>
              <div>
              <div className='online'></div>
              </div>
              <div>
              <span>200 mil</span> 
              </div>
            </div>
          </div>
      </div>

      <div className='perfil'>
          <div className="foto">
            <img src={profile} alt="perfil" />
          </div>
          <div className="infos">
            <div className='name'>
            <p>NomedoCanal</p>
            <span>Just Chating</span>
            </div>
            <div className='spectators'>
              <div>
              <div className='online'></div>
              </div>
              <div>
              <span>200 mil</span> 
              </div>
            </div>
          </div>
      </div>

      <div className='perfil'>
          <div className="foto">
            <img src={profile} alt="perfil" />
          </div>
          <div className="infos">
            <div className='name'>
            <p>NomedoCanal</p>
            <span>Just Chating</span>
            </div>
            <div className='spectators'>
              <div>
              <div className='online'></div>
              </div>
              <div>
              <span>200 mil</span> 
              </div>
            </div>
          </div>
      </div>
    </div>
    </Container>
    );
}

export default Recommended;