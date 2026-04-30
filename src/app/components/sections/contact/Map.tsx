"use client";

export default function Map() {
  return (
    <section className="h-100 w-full">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14097.428516155862!2d-82.45868!3d27.952347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1777573417203!5m2!1sen!2sus"
        className="w-full h-full border-0"
        loading="lazy"
      />

    </section>
  );
}