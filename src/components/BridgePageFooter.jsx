/* eslint-disable react/display-name */
import { memo } from "react";



const BridgePageFooter = memo(() => {
    return (
        <>
            <div className="flex justify-center items-center pt-16 pb-8 mt-auto">
                <div>
                    <a href="https://www.mantle.xyz/" rel="noreferrer noopener" target="_blank" className="inline-block">
                        <div className="flex flex-row align-center gap-4">
                            <svg width="40" height="40" viewBox="0 0 84 85" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.9876 84.4355L41.9931 70.199C40.5587 70.199 39.1131 70.0846 37.6981 69.8585L35.4896 83.9219C37.6315 84.2625 39.8179 84.4355 41.9904 84.4355H41.9876ZM48.4856 83.9275C50.6331 83.5869 52.7668 83.0761 54.831 82.4034L50.475 68.8591C49.1154 69.303 47.706 69.6407 46.2882 69.8641L48.4856 83.9275ZM29.1414 82.395L33.5085 68.8535C32.1462 68.4097 30.8116 67.8514 29.5381 67.1982L23.1067 79.8799C25.0405 80.8736 27.0715 81.7195 29.1414 82.395ZM60.8629 79.8966C62.7996 78.9056 64.6724 77.75 66.4315 76.4631L58.105 64.9511C56.948 65.7997 55.7161 66.559 54.4426 67.2094L60.8629 79.8966ZM17.5409 76.4408L25.8757 64.9343C24.7243 64.0913 23.6255 63.1422 22.6045 62.1177L12.5911 72.1782L12.5994 72.1866C14.1365 73.733 15.7985 75.1651 17.5409 76.4408ZM71.3147 72.2731L71.4007 72.1838C72.9323 70.6429 74.3529 68.9736 75.6236 67.2233L64.1896 58.835C63.3517 59.9906 62.4111 61.096 61.3957 62.1205L61.2542 62.2657L66.0652 66.8353L71.3147 72.2731ZM8.3571 67.1954L19.7966 58.8154C18.9532 57.6514 18.1985 56.412 17.5492 55.1307L4.94161 61.5929C5.92658 63.5386 7.07525 65.4228 8.3571 67.1926V67.1954ZM79.0447 61.6208C80.0324 59.6752 80.8731 57.6318 81.5473 55.5494L68.0879 51.1528C67.6468 52.5234 67.0918 53.8661 66.4426 55.1474L79.0447 61.6208ZM2.44727 55.5187L15.9095 51.1333C15.4683 49.7655 15.1326 48.3474 14.9078 46.9209L0.929588 49.1374C1.26808 51.298 1.7786 53.4446 2.44727 55.5215V55.5187ZM83.0678 49.1681C83.4063 47.0131 83.5783 44.8134 83.5811 42.6305L69.4308 42.6221C69.4308 44.0653 69.317 45.5196 69.0923 46.9461L83.0678 49.1681ZM14.5721 42.5998C14.5721 41.1566 14.6859 39.6994 14.9078 38.2758L0.929588 36.0593C0.591087 38.2143 0.421844 40.414 0.419067 42.597H14.5694L14.5721 42.5998ZM69.0978 38.2981L83.0761 36.09C82.7404 33.9294 82.2299 31.7828 81.564 29.7059L68.099 34.083C68.5402 35.4536 68.8759 36.8689 69.0978 38.2953V38.2981ZM15.9095 34.0662C16.3506 32.6956 16.9055 31.3501 17.552 30.0688L4.94438 23.6038C3.95941 25.5494 3.11872 27.5928 2.44727 29.6752L15.9067 34.0662H15.9095ZM66.4592 30.0884L79.0724 23.6345C78.0874 21.686 76.9388 19.8018 75.6597 18.032L64.2146 26.4064C65.0553 27.5705 65.81 28.8099 66.4592 30.0912V30.0884ZM19.8022 26.3841C20.6429 25.2228 21.5862 24.1118 22.6073 23.0874L22.635 23.0594L12.6299 12.9934L12.6022 13.0213C11.0651 14.5678 9.63895 16.2455 8.36543 18.0013L19.8022 26.3841ZM61.4456 23.1376L64.4671 20.0363L71.4229 13.0408L71.4007 13.0185C69.872 11.4804 68.2155 10.054 66.4787 8.77827L58.1383 20.2791C59.287 21.1222 60.3829 22.0657 61.3957 23.0874L61.4456 23.1376ZM25.909 20.2484C27.066 19.4026 28.2979 18.6433 29.5714 17.9929L23.1594 5.30288C21.2227 6.29386 19.3499 7.44673 17.5909 8.7336L25.909 20.2484ZM54.4787 18.0152L60.9184 5.33917C58.9846 4.34541 56.9564 3.4968 54.8865 2.82126L50.511 16.3599C51.8734 16.8065 53.2079 17.362 54.4814 18.018L54.4787 18.0152ZM33.5446 16.3432C34.9069 15.9021 36.3164 15.5643 37.7314 15.341L35.5423 1.27479C33.3975 1.61256 31.2611 2.1234 29.1968 2.79614L33.5446 16.3432ZM46.3242 15.3494L48.5383 1.28595C46.3964 0.945394 44.21 0.769531 42.0403 0.769531L42.0264 15.006C43.4609 15.006 44.9064 15.1233 46.3242 15.3494Z" fill="white"></path><path d="M41.9958 70.8282V56.5199C40.8005 56.5199 39.608 56.3628 38.4548 56.057L34.7624 69.8799C37.1193 70.5083 39.5519 70.8282 41.9958 70.8282ZM49.2292 69.8799C51.5945 69.2486 53.87 68.3088 55.9856 67.0856L48.8252 54.6963C47.7954 55.2911 46.6899 55.7484 45.5395 56.0542L49.2292 69.8799ZM28.0031 67.0828L35.1664 54.6963C34.1395 54.1015 33.1883 53.3693 32.3353 52.5192L32.2035 52.3901L27.6833 57.1483L22.1362 62.5546L22.2175 62.6332C23.9515 64.367 25.8988 65.8623 28.0059 67.0828H28.0031ZM61.7741 62.6388H61.7769C63.508 60.9021 65.0036 58.9579 66.2213 56.8537L53.8364 49.6884C53.2415 50.7152 52.5092 51.6663 51.659 52.5164L61.7741 62.6388ZM17.7535 56.8229L30.1496 49.6744C29.5548 48.6447 29.1002 47.5393 28.7944 46.3863L14.9645 50.0643C15.593 52.4294 16.5329 54.7047 17.7535 56.8229ZM69.0215 50.1008C69.65 47.7441 69.9699 45.3117 69.9727 42.8681L55.663 42.8625C55.663 44.0605 55.5058 45.2528 55.1972 46.4059L69.0215 50.1008ZM28.3342 42.8457C28.3342 41.6477 28.4914 40.4553 28.8028 39.3023L14.9813 35.5989C14.35 37.9556 14.0273 40.388 14.0273 42.8316L28.337 42.8457H28.3342ZM55.2 39.3191L69.0271 35.6354C68.3958 33.2703 67.4558 30.995 66.2353 28.8797L53.842 36.0338C54.4368 37.0634 54.8942 38.1688 55.2 39.3191ZM30.1636 36.017C30.75 35.0042 31.4739 34.0643 32.3101 33.2226L32.3466 33.1862L27.2287 28.0689L22.3073 22.9936L22.2175 23.0806C20.4891 24.8088 18.9964 26.7475 17.7815 28.846L30.1636 36.017ZM27.2287 28.0661L27.2877 28.125L27.2287 28.0661ZM51.6675 33.203L56.7348 28.1362L61.9059 23.2097L61.7769 23.0778C60.0485 21.3496 58.104 19.8542 56.0025 18.6366L48.8336 31.0203C49.8465 31.6067 50.7892 32.3305 51.631 33.1665L51.6675 33.203ZM35.1748 31.0119C36.2018 30.4171 37.3073 29.9626 38.4604 29.654L34.7792 15.8283C32.4111 16.4595 30.1384 17.3966 28.02 18.6198L35.1748 31.0119ZM45.548 29.6596L49.2488 15.8367C46.892 15.2054 44.4593 14.8856 42.0154 14.8828L42.007 29.1911C43.2051 29.1911 44.3976 29.3482 45.5508 29.6568L45.548 29.6596Z" fill="white"></path></svg>
                            <div className="flex items-center text-white">
                                ©&nbsp;Mantle 2024
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="pb-8 md:pb-20 px-4 md:px-9">
                <svg className="w-full h-auto opacity-10 mb-6" width="148" height="20" viewBox="0 0 148 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.570801 4.75124V0.703125H8.4248V0.703143L8.42481 0.703136L16.6839 19.3844H12.2558L5.78638 4.75124H4.62162V19.3845H0.570847V4.75124H0.570801ZM16.6839 19.3844L24.943 0.703136L24.943 0.70317V0.703125H32.797V0.703167H32.7977V19.3844H28.7469L28.7469 4.75124H27.5815L21.1127 19.3844H16.6839ZM79.1265 19.3844H83.1773V0.703167H79.1265V19.3844ZM44.1526 9.24911L46.1409 4.75124H48.2738L50.2624 9.24911H44.1526ZM39.6721 19.3844L42.363 13.2972H52.052L54.7432 19.3844H59.1713L50.913 0.703136L50.9128 0.703211V0.703125H43.5022V0.703542L35.2433 19.3844H39.6721ZM65.5633 4.75124V19.3844H61.5125V4.75124V0.703136L70.8668 0.703125V0.703426L70.8674 0.703136L79.1257 19.3844H74.6977L68.2282 4.75124H65.5633ZM85.4269 4.75124H94.5037V19.3844H98.5544V4.75124H107.631V0.703125H85.4269V4.75124ZM109.882 0.703136H113.932V15.3363H126.761V19.3844H109.882L109.882 19.3844V0.703136ZM133.061 11.798V15.3363H147.39V19.3844H129.011L129.01 19.3844V11.798V7.74987V4.75124V0.703136L147.389 0.703125V4.75124H133.061V7.74987H146.132V11.798H133.061Z" fill="white"></path></svg>
                <div className="text-center py-6 w-full md:w-3/4 lg:w-1/2 m-auto">
                    <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary">
                        Neither the MNT Bonus nor any information provided in connection therewith constitutes an offer or sale of securities in or into the United States, or to or for the account or benefit of U.S. persons, or in other excluded jurisdictions where it is unlawful to do so.
                    </p>
                    <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary">
                        By participating in the MNT Bonus, you hereby acknowledge that any MNT tokens you receive will be subject to transfer restrictions under applicable laws and expressly agree that you, at any time within one year from the receipt of MNT tokens, will not reoffer, resell or transfer any MNT tokens within the United States or to, or for the account or benefit of, any U.S. persons, except pursuant to an exemption from, or in a transaction not subject to, the registration requirements of the U.S. Securities Act of 1933, as amended.
                    </p>
                </div>
            </div>
        </>
    )
})

export default BridgePageFooter;