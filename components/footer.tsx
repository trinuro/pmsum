import Link from "next/link";
import { LEARN_MORE_SECTION } from "@/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagramSquare,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Footer = () =>{
    return (<section className="bg-[#363636] text-white relative pt-5">
        <div className="flex flex-row justify-between items-center gap-5 pt-8 pb-4  md:padding-container md:max-container">
            <Link href='#'>
                <svg className="max-h-[450px]" width="auto" height="full" viewBox="0 0 100 315" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.0061 311.909L9.91532 311.826L9.94954 299.809C9.95574 297.631 10.3872 295.753 11.244 294.173C12.0913 292.585 13.2738 291.362 14.7914 290.505C16.2995 289.647 18.0526 289.221 20.0507 289.227C22.0583 289.233 23.8137 289.678 25.3168 290.563C26.8106 291.438 27.9671 292.687 28.7863 294.309C29.6056 295.93 30.012 297.854 30.0057 300.079L29.9846 307.494L24.4448 307.478L24.4622 301.37C24.4652 300.31 24.2831 299.424 23.9158 298.712C23.5485 297.992 23.034 297.446 22.3722 297.075C21.7009 296.703 20.9201 296.516 20.03 296.514C19.1304 296.511 18.3533 296.694 17.6989 297.061C17.0349 297.429 16.522 297.972 16.1601 298.69C15.7982 299.409 15.6158 300.294 15.6128 301.345L15.6029 304.811L39.0261 304.878L39.0061 311.909ZM9.98963 285.732L10.0144 277.025L28.0467 269.69L28.0477 269.349L10.0575 261.911L10.0823 253.204L39.173 253.287L39.1536 260.134L21.2843 260.083L21.2836 260.324L38.9483 267.363L38.9358 271.738L21.1319 278.676L21.1312 278.917L39.0999 278.969L39.0804 285.815L9.98963 285.732ZM18.8611 233.119C17.8191 233.211 17.0083 233.63 16.4285 234.376C15.8393 235.113 15.5427 236.168 15.5388 237.541C15.5362 238.45 15.6524 239.208 15.8875 239.815C16.1225 240.422 16.4479 240.877 16.8637 241.181C17.27 241.486 17.7383 241.643 18.2686 241.654C18.7041 241.674 19.0879 241.59 19.4199 241.402C19.7519 241.204 20.0463 240.921 20.303 240.552C20.5503 240.174 20.7694 239.72 20.9603 239.19C21.1512 238.661 21.3186 238.064 21.4625 237.402L22.0378 234.904C22.3544 233.465 22.7747 232.197 23.2987 231.1C23.8227 229.994 24.4456 229.068 25.1674 228.322C25.8892 227.566 26.7195 226.995 27.6581 226.61C28.5967 226.224 29.6484 226.028 30.8132 226.022C32.6502 226.037 34.2256 226.505 35.5393 227.428C36.853 228.35 37.8577 229.674 38.5536 231.399C39.2494 233.115 39.5939 235.186 39.587 237.61C39.5801 240.044 39.2095 242.164 38.4751 243.97C37.7408 245.777 36.6289 247.18 35.1393 248.18C33.6497 249.179 31.7685 249.69 29.4957 249.712L29.5149 242.979C30.4525 242.925 31.2345 242.676 31.8607 242.233C32.487 241.789 32.9622 241.18 33.2864 240.404C33.6106 239.619 33.7742 238.711 33.7771 237.678C33.7798 236.732 33.6543 235.926 33.4005 235.263C33.1467 234.59 32.7931 234.072 32.3396 233.711C31.886 233.35 31.3657 233.164 30.7786 233.153C30.2294 233.161 29.7601 233.33 29.3709 233.66C28.9723 233.991 28.6299 234.501 28.3439 235.191C28.0484 235.872 27.776 236.743 27.5268 237.803L26.8079 240.84C26.2231 243.358 25.2846 245.339 23.9926 246.784C22.6912 248.229 20.9372 248.944 18.7308 248.928C16.9316 248.933 15.3562 248.445 14.0049 247.466C12.6535 246.487 11.6015 245.134 10.8488 243.409C10.0961 241.683 9.72294 239.717 9.72922 237.511C9.73564 235.257 10.1247 233.302 10.8965 231.647C11.6588 229.983 12.7278 228.693 14.1035 227.779C15.4793 226.864 17.0715 226.4 18.8803 226.386L18.8611 233.119ZM10.2201 204.813L10.24 197.796L29.0042 197.849C31.1727 197.856 33.0605 198.377 34.6674 199.414C36.2648 200.451 37.5012 201.893 38.3766 203.743C39.2426 205.592 39.6721 207.738 39.6651 210.181C39.6581 212.653 39.2163 214.81 38.3399 216.654C37.4539 218.499 36.2093 219.93 34.606 220.948C32.9933 221.966 31.1026 222.472 28.9341 222.466L10.1699 222.412L10.19 215.381L28.3433 215.433C29.3471 215.436 30.2426 215.22 31.0298 214.787C31.8171 214.344 32.4344 213.726 32.8817 212.932C33.329 212.137 33.5542 211.215 33.5572 210.164C33.5602 209.112 33.3403 208.193 32.8974 207.406C32.4546 206.609 31.8409 205.987 31.0561 205.54C30.2714 205.093 29.3772 204.868 28.3734 204.865L10.2201 204.813ZM10.2526 193.389L10.2774 184.682L28.3097 177.347L28.3107 177.006L10.3204 169.568L10.3452 160.861L39.436 160.944L39.4165 167.79L21.5473 167.739L21.5466 167.981L39.2113 175.02L39.1988 179.395L21.3949 186.333L21.3942 186.574L39.3629 186.625L39.3434 193.472L10.2526 193.389Z" fill="white"/>
                    <path d="M89.0929 308.142L60.002 308.158L59.9961 298.343C59.995 296.449 60.3255 294.872 60.9876 293.612C61.6498 292.343 62.5536 291.391 63.699 290.756C64.8445 290.121 66.1464 289.803 67.6047 289.802C68.8168 289.801 69.8539 290.004 70.7158 290.411C71.5778 290.818 72.2742 291.371 72.8049 292.072C73.3356 292.772 73.7196 293.553 73.9569 294.415L74.1841 294.415C74.2499 293.477 74.5808 292.568 75.1768 291.687C75.7634 290.806 76.5869 290.081 77.6471 289.512C78.7074 288.944 79.9762 288.659 81.4534 288.658C82.9212 288.657 84.233 288.983 85.3887 289.636C86.5349 290.289 87.4399 291.292 88.1035 292.646C88.7578 293.99 89.0855 295.704 89.0867 297.787L89.0929 308.142ZM86.705 305.487L86.7004 297.789C86.699 295.544 86.2009 293.887 85.2059 292.818C84.211 291.739 82.9606 291.2 81.455 291.201C80.347 291.201 79.3434 291.472 78.4441 292.012C77.5353 292.543 76.8161 293.296 76.2863 294.272C75.7566 295.238 75.4921 296.374 75.4929 297.681L75.4976 305.494L86.705 305.487ZM73.1396 305.495L73.1352 298.094C73.1345 296.949 72.8972 295.945 72.4232 295.083C71.9492 294.222 71.2954 293.55 70.4617 293.067C69.6281 292.585 68.6763 292.344 67.6062 292.345C66.0626 292.345 64.8082 292.848 63.8429 293.852C62.8681 294.857 62.3813 296.353 62.3825 298.342L62.3868 305.501L73.1396 305.495ZM89.0774 282.201L89.0791 284.985L59.9819 274.419L59.9802 271.578L89.0648 260.98L89.0664 263.764L63.4327 272.897L63.4328 273.096L89.0774 282.201ZM77.9257 280.205L77.9171 265.773L80.3034 265.772L80.312 280.203L77.9257 280.205ZM69.049 234.588L69.0506 237.259C68.0564 237.458 67.1381 237.818 66.2956 238.34C65.4436 238.851 64.7006 239.496 64.0666 240.273C63.4326 241.05 62.9407 241.931 62.5909 242.916C62.2411 243.901 62.0666 244.966 62.0673 246.112C62.0684 247.949 62.5476 249.625 63.5049 251.139C64.4623 252.645 65.8692 253.851 67.7258 254.759C69.573 255.658 71.8365 256.106 74.5164 256.105C77.2153 256.104 79.4877 255.652 81.3338 254.752C83.1798 253.842 84.5806 252.634 85.5362 251.127C86.4822 249.612 86.9547 247.935 86.9536 246.098C86.9529 244.952 86.7771 243.887 86.4261 242.902C86.0752 241.918 85.587 241.037 84.9615 240.261C84.3266 239.485 83.5828 238.841 82.7302 238.331C81.8777 237.81 80.9541 237.451 79.9597 237.253L79.9581 234.582C81.2935 234.818 82.539 235.263 83.6947 235.915C84.8409 236.559 85.8452 237.382 86.7075 238.385C87.5699 239.379 88.2429 240.525 88.7266 241.822C89.2104 243.119 89.4527 244.544 89.4536 246.097C89.4551 248.54 88.8456 250.709 87.6251 252.603C86.3952 254.498 84.6631 255.986 82.4289 257.067C80.1947 258.138 77.5577 258.674 74.5179 258.676C71.4782 258.678 68.8405 258.144 66.6051 257.075C64.3696 255.997 62.6405 254.511 61.4177 252.618C60.1855 250.725 59.5687 248.556 59.5673 246.113C59.5663 244.56 59.807 243.135 60.2891 241.837C60.7619 240.54 61.4335 239.393 62.3041 238.399C63.1653 237.394 64.1686 236.57 65.314 235.925C66.4595 235.271 67.7045 234.826 69.049 234.588ZM89.0453 228.338L59.9544 228.354L59.9528 225.698L75.6204 225.689L75.6203 225.433L59.9442 211.237L59.9421 207.743L73.4012 220.165L89.033 207.784L89.035 211.022L75.2488 221.811L79.5977 225.687L89.0437 225.682L89.0453 228.338ZM62.3198 193.239L59.9335 193.24L59.9209 172.146L62.3072 172.145L62.3127 181.364L89.0173 181.349L89.0189 184.005L62.3143 184.02L62.3198 193.239ZM74.4493 143.52C77.4796 143.518 80.1172 144.056 82.3622 145.135C84.5976 146.213 86.3315 147.699 87.5637 149.592C88.7864 151.476 89.3985 153.644 89.3999 156.097C89.4014 158.549 88.7919 160.723 87.5714 162.618C86.3415 164.503 84.6094 165.986 82.3752 167.067C80.1316 168.138 77.4946 168.674 74.4643 168.676C71.434 168.678 68.8011 168.144 66.5656 167.075C64.3206 165.997 62.5868 164.511 61.3641 162.618C60.1319 160.725 59.515 158.556 59.5136 156.113C59.5121 153.661 60.1264 151.492 61.3563 149.607C62.5768 147.712 64.3088 146.224 66.5525 145.143C68.7867 144.063 71.419 143.521 74.4493 143.52ZM74.4508 146.105C71.8466 146.106 69.6168 146.543 67.7612 147.416C65.8962 148.288 64.4717 149.477 63.4878 150.983C62.5038 152.489 62.0124 154.199 62.0136 156.112C62.0147 158.015 62.5082 159.72 63.4939 161.225C64.4796 162.73 65.9008 163.922 67.7574 164.802C69.614 165.672 71.8491 166.106 74.4627 166.105C77.0669 166.104 79.2967 165.667 81.1523 164.795C83.0078 163.922 84.4323 162.733 85.4257 161.227C86.4097 159.721 86.9011 158.011 86.8999 156.098C86.8988 154.185 86.4054 152.476 85.4196 150.971C84.4339 149.457 83.0127 148.264 81.1561 147.394C79.2901 146.524 77.055 146.094 74.4508 146.105ZM62.2807 127.614L59.8943 127.615L59.8817 106.521L62.2681 106.52L62.2736 115.739L88.9781 115.724L88.9797 118.38L62.2752 118.395L62.2807 127.614ZM74.4101 77.8948C77.4404 77.8931 80.078 78.4315 82.323 79.5098C84.5585 80.5881 86.2923 82.0739 87.5245 83.9671C88.7472 85.8509 89.3593 88.0191 89.3608 90.4718C89.3623 92.9244 88.7528 95.0981 87.5323 96.9927C86.3024 98.8778 84.5703 100.361 82.3361 101.442C80.0924 102.513 77.4554 103.049 74.4251 103.051C71.3948 103.053 68.7619 102.519 66.5264 101.45C64.2815 100.372 62.5476 98.8862 61.3249 96.9929C60.0927 95.0997 59.4759 92.9315 59.4744 90.4883C59.473 88.0356 60.0872 85.8667 61.3171 83.9816C62.5376 82.087 64.2697 80.5993 66.5134 79.5185C68.7476 78.4377 71.3798 77.8965 74.4101 77.8948ZM74.4117 80.48C71.8075 80.4815 69.5776 80.9183 67.7221 81.7906C65.8571 82.6628 64.4326 83.852 63.4487 85.3583C62.4647 86.8645 61.9733 88.574 61.9744 90.4869C61.9756 92.3903 62.469 94.0946 63.4548 95.5997C64.4405 97.1049 65.8617 98.2973 67.7183 99.1769C69.5748 100.047 71.8099 100.481 74.4236 100.48C77.0277 100.479 79.2576 100.042 81.1131 99.1695C82.9687 98.2973 84.3932 97.1081 85.3866 95.6018C86.3705 94.0956 86.8619 92.3861 86.8608 90.4732C86.8597 88.5603 86.3662 86.8513 85.3805 85.3462C84.3947 83.8315 82.9735 82.6391 81.117 81.769C79.2509 80.8988 77.0158 80.4691 74.4117 80.48ZM88.9517 71.4628L59.8608 71.4788L59.8552 62.0896C59.854 60.0252 60.2507 58.3015 61.0453 56.9185C61.8305 55.526 62.8999 54.4791 64.2537 53.7775C65.6074 53.0666 67.1318 52.7106 68.8269 52.7097C70.522 52.7087 72.0515 53.0583 73.4156 53.7583C74.7702 54.4583 75.8456 55.4994 76.6419 56.8815C77.4287 58.2637 77.8227 59.9822 77.8239 62.0371L77.8284 69.4235L75.442 69.4248L75.4376 62.1094C75.4367 60.5848 75.1519 59.3208 74.5831 58.3173C74.0048 57.3138 73.2184 56.5662 72.2238 56.0743C71.2292 55.5729 70.0974 55.3226 68.8285 55.3233C67.5595 55.324 66.428 55.5756 65.434 56.078C64.44 56.571 63.6592 57.3243 63.0916 58.3378C62.524 59.342 62.2407 60.6158 62.2416 62.1593L62.2456 68.8213L88.9501 68.8065L88.9517 71.4628ZM87.1014 17.5718L85.4405 19.2488L75.5624 9.36789L75.5772 34.0838L73.1908 34.0851L73.1761 9.36921L63.3098 19.261L61.6469 17.5858L74.3665 4.85151L87.1014 17.5718Z" fill="white"/>
                </svg>
            </Link>
            <div className="hidden md:block">
                <h2 className="font-extrabold text-[40px] pb-5">Learn more</h2>
                <ul className="">
                    {
                        LEARN_MORE_SECTION.map((element,index)=>link_to_other_page(element, index))
                    }
                </ul>
            </div>
            <div className="font-extrabold text-[40px] pb-5 relative hidden md:flex md:flex-col md:gap-3">
                    <h2>Connect with PMSUM</h2>
                    <div className="flex flex-row items-center gap-4">
                    <a href='https://www.facebook.com/pmsum.sarawak/?locale=ms_MY'>
                        <FontAwesomeIcon
                            icon={faFacebookSquare}
                            style={{ color: "white", fontSize: 60}}
                            
                        />
                    </a>
                    <a href='https://my.linkedin.com/in/persatuan-mahasiswa-sarawak-universiti-malaya-4265272aa'>
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            style={{ color: "white", fontSize: 60}}
                            
                        />
                    </a>
                    <a href='https://www.instagram.com/pmsum_/?hl=en'>
                        <FontAwesomeIcon
                            icon={faInstagramSquare}
                            style={{ color: "white", fontSize: 60}}
                        />
                    </a>
                </div>
                <div>
                    <a href='mailto:23054588@siswa.um.edu.my'>
                        <div className="flex flex-row justify-start gap-5 items-center">
                            
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    style={{ color: "white", fontSize: 55}}
                                />
                                <p className="regular-16">Get in touch with us</p>
                            
                        </div>
                    </a>
                </div>
            </div>
            {/* Small screen */}
            <section className="md:hidden">
                <div>
                    <h2 className="font-extrabold text-[24px] pb-5">Learn more</h2>
                    <ul className="">
                        {
                            LEARN_MORE_SECTION.map((element,index)=>link_to_other_page(element, index))
                        }
                    </ul>
                </div>
                <div className="font-extrabold text-[24px] pb-5 relative">
                    <h2>Connect with PMSUM</h2>
                    <div className="flex flex-row items-center gap-4">
                    <a href='https://www.facebook.com/pmsum.sarawak/?locale=ms_MY'>
                        <FontAwesomeIcon
                            icon={faFacebookSquare}
                            style={{ color: "white", fontSize: 46}}
                            
                        />
                    </a>
                    <a href='https://my.linkedin.com/in/persatuan-mahasiswa-sarawak-universiti-malaya-4265272aa'>
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            style={{ color: "white", fontSize: 46}}
                            
                        />
                    </a>
                    {/*  */}
                    <a href='https://www.instagram.com/pmsum_/?hl=en'>
                        <FontAwesomeIcon
                            icon={faInstagramSquare}
                            style={{ color: "white", fontSize: 46}}
                        />
                    </a>
                </div>
                </div>
                <div>
                    <a href='mailto:23054588@siswa.um.edu.my'>
                        <div className="flex flex-row justify-start gap-5 items-center">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    style={{ color: "white", fontSize: 40}}
                                />
                            
                                <p className="regular-16">Get in touch with us</p>
                            
                        </div>
                    </a>
                </div>
            </section>
        </div>
        <section className="font-extrabold text-center bg-black">
            <p className="md:text-[24px]">PMSUM ALL RIGHTS RESERVED</p>
        </section>
    </section>)
}

interface LEARN_MORE_LI{
    name: string,
    link: string,
}

const link_to_other_page = ({name, link}:LEARN_MORE_LI, index:Number) =>{
    return(
        <li key={'LEARN_MORE_'+index} className="text-[20px] pb-3"><Link href={link}>{name}</Link></li>
    )
}

export default Footer;