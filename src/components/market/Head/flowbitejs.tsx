import Script from 'next/script';

const jsCode = function () {
  return process.browser ? require('flowbite') : console.log('Server');
};
export default function () {
  return (
    // <Script>
    //   {jsCode()}
    // </Script>
    <script src="/assets/js/flowbite.js"></script>
  );
}
