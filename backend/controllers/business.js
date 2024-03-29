import Business from "../models/Business.js";

export const businessHandle = async (req, res) => {
  const business = req.body;
  console.log(business);
  const newBusiness = new Business({
    business_name: business.businessName,
    user_id: business.userID,
    owner_name: business.ownerName,
    gst_in: business.gstNo,
    aadhar_no: business.aadharNo,
    city: business.city,
    address: business.address,
  });

  newBusiness.save();

  res.json({ message: "success", status: 200 });
};

export const getBusiness = async (req, res) => {
  const info = req.body;
  const data = await Business.find({ user_id: info.user_id });
  console.log(data);
  res.json(data);
};
