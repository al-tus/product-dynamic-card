import './BenefitsList.css'

const benefitsList = ({benefits}) => {
    return (
        <>
            <div className="benefits-list">
                <h3>BENEFITS</h3>

                <ul>
                    {benefits.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default benefitsList;