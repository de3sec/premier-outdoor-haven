
const ContactSection = () => {
  const contactInfo = [
    { title: "Store 1", detail: "123 Main St, Anytown" },
    { title: "Store 2", detail: "456 Oak Ave, Anytown" },
    { title: "Phone", detail: "(555) 123-4567" },
    { title: "Email", detail: "info@premieroutdoor.com" },
  ];

  return (
    <>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Contact Us
      </h2>
      <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
        Visit our stores or call us for assistance.
      </p>
      {contactInfo.map((info, index) => (
        <div key={index} className="flex items-center gap-4 bg-dark-green px-4 min-h-[72px] py-2">
          <div className="flex flex-col justify-center">
            <p className="text-white text-base font-medium leading-normal line-clamp-1">
              {info.title}
            </p>
            <p className="text-text-green text-sm font-normal leading-normal line-clamp-2">
              {info.detail}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactSection;
