import { useRef } from "react";

const Row = props => {
  const { tel, name } = props;
  const tooltipRef = useRef();

  return (
    <div className="collapse bg-base-200">
      <input type="radio" name="my-accordion-1" />
      <div className="collapse-title text-xl font-medium">{name}</div>
      <div className="collapse-content">
        <div className="join">
          <div className="grid place-content-center">
            <p id="number">{tel}</p>
          </div>
          <div
            className="tooltip tooltip-right"
            data-tip="copy to clipboard"
            ref={tooltipRef}
            onClick={() => {
              navigator.clipboard.writeText(tel);
              //   e.currentTarget.dataset.tip = "copied to clipboard";
              tooltipRef.current.dataset.tip = "copied to clipboard";
            }}
            onMouseLeave={() => {
              //   e.currentTarget.dataset.tip = "copy to clipboard";
              tooltipRef.current.dataset.tip = "copy to clipboard";
            }}
          >
            <button className="btn btn-xs">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
