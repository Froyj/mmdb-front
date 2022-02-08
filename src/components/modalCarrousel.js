import ReactDOM from "react-dom";
import styled from "styled-components";
import HouseCarrousel from "../pages/HouseCarrousel";

const modalCarrousel = ({ isShowing, hide }) =>

  isShowing
    ? ReactDOM.createPortal(
      <>
        <ModalOverlay className="modal-overlay">
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  onClick={hide}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <HouseCarrousel />
              </div>
            </div>
          </div>
        </ModalOverlay>
      </>,
      document.body
    )
    : null;

const ModalOverlay = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 1040;
      background-color: rgba(0, 0, 0, 0.5);

      .modal-wrapper {
              position: fixed;
              top: 0;
              left: 0;
              z-index: 1050;
              width: 100%;
              height: 100%;
              overflow-x: hidden;
              overflow-y: auto;
              outline: 0;
              display: flex;
              align-items: center;
            }

            .modal {
              z-index: 100;
              background: #fff;
              position: relative;
              margin: auto;
              border-radius: 25px;
              max-width: 800px;
              width: 80%;
              padding: 1rem;
            }

            .modal-header {
              display: flex;
              justify-content: flex-end;
              align-items: center;
            }

            .modal-close-button {
              margin-right: 0;
              font-size: 1.4rem;
              font-weight: 700;
              color: #000;
              cursor: pointer;
              border: none;
              background: transparent;
            }

    `

export default modalCarrousel;