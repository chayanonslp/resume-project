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
 
// JavaScript สำหรับการแสดงผลแบบ Fade-in เมื่อเลื่อนหน้าเว็บ
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target); // ไม่ต้องสังเกตอีกเมื่อแสดงแล้ว
      }
    });
  }, {
    threshold: 0.2   // 20% ของ element โผล่ขึ้นมาแล้วค่อยแสดง
  });

  sections.forEach(section => observer.observe(section));
});
