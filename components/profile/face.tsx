export default function Face() {
    const basePath = process.env.NODE_ENV === 'production' ? '/resume' : '';
    const profileImage = `${basePath}/img/temp.png`

    return (
        <>
            <div>
                <img src={profileImage} alt="face"/>
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