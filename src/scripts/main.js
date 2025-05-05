// This file is intentionally left blank.
  // JavaScript สำหรับเลื่อนหน้าเว็บพร้อม Offset
  document.querySelectorAll('.nav-list a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = document.querySelector('.navbar').offsetHeight;
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});