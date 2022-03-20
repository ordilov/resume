export default function Face() {
    return (
        <>
            <div>
                <img src={"/img/temp.png"} alt="face"/>
                <style jsx>{`
                  div {
                    width: 200px;
                    height: 200px;
                    grid-column: 1 / 2;
                    grid-row: 1 / 6;
                    margin-top: 1rem;
                    margin-left: 1rem;
                  }

                  img {
                    width: 100%;
                    height: 100%;
                  }

                  @media (max-width: 600px) {
                    div {
                      margin: auto;
                    }
                  }
                `}</style>
            </div>
        </>
    );
}