import { FC } from "react"


interface ISearch {
    className?: string
}

const Search:FC<ISearch> = ({className}) => {
    // fill-black
    // fill-white
    return (
        <svg className={className} width="24.000000" height="24.000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="clip3_1667">
                    <rect id="icon-search" width="23.000000" height="23.000000" transform="translate(0.500000 0.500000)" fillOpacity="0"/>
                </clipPath>
            </defs>
            <g clipPath="url(#clip3_1667)">
                <path id="Shape" d="M11 20Q9.9975 20 9.04214 19.7877Q8.25323 19.6124 7.49649 19.2924Q6.73315 18.9695 6.05252 18.5211Q5.29279 18.0208 4.63605 17.364Q3.97934 16.7073 3.47894 15.9476Q3.03055 15.2668 2.70767 14.5035Q2.3876 13.7467 2.21228 12.9578L2.21228 12.9578Q2 12.0024 2 11Q2 9.99756 2.21228 9.04224L2.21228 9.04224Q2.3876 8.2533 2.70767 7.49646Q3.03055 6.73315 3.47891 6.05249Q3.97931 5.29272 4.63605 4.63599Q5.29276 3.97937 6.05246 3.47888Q6.73312 3.03052 7.49649 2.70764Q8.25327 2.38757 9.04221 2.21228L9.04221 2.21228Q9.99753 2 11 2Q12.0025 2 12.9578 2.21228L12.9578 2.21228Q13.7468 2.38757 14.5035 2.70764Q15.2669 3.03052 15.9476 3.47888Q16.7072 3.97937 17.364 4.63599Q18.0208 5.29285 18.5212 6.05261Q18.9695 6.73328 19.2923 7.49646Q19.6124 8.2533 19.7877 9.04224Q20 9.99756 20 11Q20 12.0026 19.7877 12.9579L19.7877 12.9579Q19.6124 13.7468 19.2923 14.5035Q18.9695 15.2668 18.5211 15.9475Q18.2931 16.2937 18.0326 16.6185L21.707 20.2928C22.103 20.6888 22.103 21.3112 21.707 21.7072C21.311 22.103 20.6888 22.103 20.2928 21.7072L16.6184 18.0327Q16.2936 18.2931 15.9474 18.5211Q15.2668 18.9695 14.5035 19.2924Q13.7467 19.6124 12.9578 19.7877L12.9577 19.7877Q12.0024 20 11 20ZM16.0435 15.8542Q16.5045 15.376 16.8619 14.83Q17.2034 14.3081 17.4503 13.7244Q17.6914 13.1543 17.8268 12.5602L17.8268 12.5601L17.8268 12.5601Q18 11.7998 18 11Q18 10.2002 17.8268 9.43994Q17.6914 8.8457 17.4503 8.27563Q17.2034 7.69189 16.8619 7.17004L16.8619 7.17004Q16.4686 6.56909 15.9497 6.05029Q15.4309 5.53149 14.83 5.13818L14.83 5.13818L14.83 5.13806Q14.3082 4.79663 13.7244 4.54968Q13.1543 4.30859 12.5602 4.17322L12.5601 4.17322Q11.7998 4 11 4Q10.2003 4 9.43994 4.17322L9.43991 4.17322L9.43991 4.17322Q8.8457 4.30859 8.2756 4.54968Q7.69186 4.79663 7.17007 5.13806L7.17004 5.13806Q6.56909 5.53137 6.05026 6.05029Q5.53143 6.56909 5.13812 7.17004Q4.7966 7.69189 4.54968 8.27563Q4.30853 8.8457 4.17319 9.43994Q4 10.2002 4 11Q4 11.7998 4.17319 12.5601L4.17319 12.5602Q4.30856 13.1543 4.54968 13.7244Q4.7966 14.3081 5.13812 14.83L5.13812 14.83Q5.53143 15.4309 6.05026 15.9497Q6.56909 16.4686 7.17004 16.8619Q7.69186 17.2034 8.2756 17.4503Q8.8457 17.6914 9.43988 17.8268L9.43991 17.8268Q10.2002 18 11 18Q11.7998 18 12.5601 17.8268Q13.1543 17.6914 13.7244 17.4503Q14.3082 17.2034 14.83 16.8618Q15.376 16.5045 15.8541 16.0436C15.8811 16.0087 15.9106 15.9751 15.9428 15.9429C15.975 15.9108 16.0086 15.8811 16.0435 15.8542Z" clipRule="evenodd" fillOpacity="1.000000" fillRule="evenodd"/>
            </g>
        </svg>

    )  
}

export default Search