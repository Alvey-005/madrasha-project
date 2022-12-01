import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Link from "next/link";
const usefulLinks = [
    {id:1,name:"হোম",link:"/"},
    {id:2,name:"শিক্ষা বোর্ড ",link:"http://www.educationboard.gov.bd/"},
    {id:5,name:"বাংলাদেশ মাদ্রাসা শিক্ষা বোর্ড",link:"http://www.bmeb.gov.bd/"},
    // {id:3,name:"শিক্ষক বাতায়ন",link:"https://www.teachers.gov.bd/"},
    {id:4,name:"শিক্ষা মন্ত্রণালয়-গণপ্রজাতন্ত্রী বাংলাদেশ সরকার",link:"http://www.moedu.gov.bd/"},
]
export default function Footer() {
    return (
        <MDBFooter style={{backgroundColor : '#023020', color:'white' ,width:'100%'}}  className='text-center text-lg-start'>
            {/*<section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>*/}
            {/*    <div className='me-5 d-none d-lg-block'>*/}
            {/*        <span>Get connected with us on social networks:</span>*/}
            {/*    </div>*/}

            {/*    <div>*/}
            {/*        <a href='' className='me-4 text-reset'>*/}
            {/*            <MDBIcon fab icon="facebook-f" />*/}
            {/*        </a>*/}
            {/*        <a href='' className='me-4 text-reset'>*/}
            {/*            <MDBIcon fab icon="twitter" />*/}
            {/*        </a>*/}
            {/*        <a href='' className='me-4 text-reset'>*/}
            {/*            <MDBIcon fab icon="google" />*/}
            {/*        </a>*/}
            {/*        <a href='' className='me-4 text-reset'>*/}
            {/*            <MDBIcon fab icon="linkedin" />*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <section className='d-flex justify-content-center justify-content-lg-between '>
                <MDBContainer className='text-center text-md-start mt-3'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-2'>
                            <h6 className='text-uppercase fw-bold mb-2'>
                                <MDBIcon icon="gem" className="me-3" />
                                Abu Taher Madrasha                            </h6>
                            {/*<p>*/}
                            {/*    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,*/}
                            {/*    consectetur adipisicing elit.*/}
                            {/*</p>*/}
                        </MDBCol>

                        {/*<MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>*/}
                        {/*    <h6 className='text-uppercase fw-bold mb-4'>Products</h6>*/}
                        {/*    <p>*/}
                        {/*        <Link href='/'>*/}
                        {/*            <a> Main Home</a>*/}
                        {/*        </Link>*/}
                        {/*    </p>*/}
                        {/*    <p>*/}
                        {/*        <a href='#!' className='text-reset'>*/}
                        {/*            React*/}
                        {/*        </a>*/}
                        {/*    </p>*/}
                        {/*    <p>*/}
                        {/*        <a href='#!' className='text-reset'>*/}
                        {/*            Vue*/}
                        {/*        </a>*/}
                        {/*    </p>*/}
                        {/*    <p>*/}
                        {/*        <a href='#!' className='text-reset'>*/}
                        {/*            Laravel*/}
                        {/*        </a>*/}
                        {/*    </p>*/}
                        {/*</MDBCol>*/}

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-2'>
                            <h6 className='text-uppercase fw-bold mb-2'>Useful links</h6>
                            {usefulLinks?.map((item)=>
                                (
                                    <p key={item.id}><Link href={item.link}>
                                    <a  className='text-reset' target="_blank">
                                        {item.name}
                                    </a>
                                </Link>
                                </p>
                                )
                            )}
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-2'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                ডাকঘর: ভেন্নাতলা, উপজেলা: শিবচর, জেলা: মাদারীপুর।                             </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                m110874ict@gmail.com                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> 01309110874
                            </p>
                            {/*<p>*/}
                            {/*    <MDBIcon icon="print" className="me-3" /> + 01 234 567 89*/}
                            {/*</p>*/}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright -
                <Link href="https://wetechbd.com/"><a className='text-reset fw-bold' target="_blank">
                    WeTech
                </a></Link>

            </div>
        </MDBFooter>
    );
}