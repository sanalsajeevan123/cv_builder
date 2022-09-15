// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

var templats = [
  {
    id:1,
    image:'template1.png',
    formStructure:{
      basic_info:{
        section_name:"Basic info",
        description:"Basic info description",
        fields:{
          name:{
            type: "text",
            label: "Name",
            description: "Enter your name",
            required: true,
            placeholder: "eg. Sam"
          },
          phone_number:{
            type: "number",
            label: "Phone number",
            description: "Enter your phone number",
            required: true,
            placeholder: "eg. 965******8"
          },
          mail_id:{
            type: "email",
            label: "Mail Id",
            description: "Enter your mail id",
            required: true,
            placeholder: "eg. Sam007@gmail.com"
          },
          objective:{
            type: "textarea",
            label: "Objective",
            description: "Short description about your goal for your job search",
            required: true,
            placeholder: "eg. To get an opportunity that allows me to showcase my skills and contribute to the company's growth."
          },
        }
      }
    }
},
  {
    id:2,
    image:'template2.png',
    formStructure:{
    
    }
},
  {
    id:3,
    image:'template3.png',
    formStructure:{
      
    }
},
  {
    id:4,
    image:'template4.png',
    formStructure:{
    
    }
},
  {
    id:5,
    image:'template5.png',
    formStructure:{
    
    }
}
]

export default async(req:NextApiRequest,res:NextApiResponse)=>{
  let filteredTemplates:any = []
  if(req.query.id == undefined){
    res.status(200).json(templats)
  }else{
    filteredTemplates = templats.find(temp => temp.id == +req.query.id)
    res.status(200).json(filteredTemplates)
  }
}

// {
//   "profile": {
//       "name": "Add category",
//       "description": "Add new category or add category under another category",
//       "fields": {
//           "name": {
//               "type": "text",
//               "label": "Name",
//               "description": "Enter the category name",
//               "required": true,
//               "placeholder": "eg. Groceries",
//               "trim": true
//           },
//           "parent_path": {
//               "type": "select",
//               "label": "Parent path",
//               "description": "Choose parent category path",
//               "required": true,
//               "items": {
//                   "1": {
//                       "label": "All - All / "
//                   },
//                   "9": {
//                       "label": "Groceries - All / Groceries /"
//                   },
//                   "10": {
//                       "label": "Beverages - All / Groceries / Beverages /"
//                   },
//                   "55": {
//                       "label": "Frozen  - All / Groceries / Frozen  /"
//                   },
//                   "56": {
//                       "label": "Stationery - All / Groceries / Stationery /"
//                   },
//                   "134": {
//                       "label": "Holders - All / Groceries / Stationery / Holders /"
//                   },
//                   "135": {
//                       "label": "Office Stationaries - All / Groceries / Stationery / Office Stationaries /"
//                   },
//                   "143": {
//                       "label": "Fruits & Vegetables - All / Groceries / Fruits & Vegetables /"
//                   },
//                   "146": {
//                       "label": "Foodgrains, Oils & Masala - All / Groceries / Foodgrains, Oils & Masala /"
//                   },
//                   "151": {
//                       "label": "Fresh produce - All / Groceries / Fresh produce /"
//                   },
//                   "153": {
//                       "label": "Fresh Fruits - All / Groceries / Fruits & Vegetables / Fresh Fruits /"
//                   },
//                   "154": {
//                       "label": "Fresh Vegetables - All / Groceries / Fruits & Vegetables / Fresh Vegetables /"
//                   },
//                   "155": {
//                       "label": "Organic Fruits - All / Groceries / Fruits & Vegetables / Organic Fruits /"
//                   },
//                   "156": {
//                       "label": "Organic Vegetables - All / Groceries / Fruits & Vegetables / Organic Vegetables /"
//                   },
//                   "157": {
//                       "label": "Atta & Flours - All / Groceries / Foodgrains, Oils & Masala / Atta & Flours /"
//                   },
//                   "158": {
//                       "label": "Rice & Rice products - All / Groceries / Foodgrains, Oils & Masala / Rice & Rice products /"
//                   },
//                   "159": {
//                       "label": "Dals & Pulses - All / Groceries / Foodgrains, Oils & Masala / Dals & Pulses /"
//                   },
//                   "160": {
//                       "label": "Oils & Ghee - All / Groceries / Foodgrains, Oils & Masala / Oils & Ghee /"
//                   },
//                   "161": {
//                       "label": "Salt, Sugar & Jaggery - All / Groceries / Foodgrains, Oils & Masala / Salt, Sugar & Jaggery /"
//                   },
//                   "162": {
//                       "label": "Masalas & Spices - All / Groceries / Foodgrains, Oils & Masala / Masalas & Spices /"
//                   },
//                   "163": {
//                       "label": "Dry Fruits & Nuts - All / Groceries / Foodgrains, Oils & Masala / Dry Fruits & Nuts /"
//                   },
//                   "165": {
//                       "label": "Bakery, Baking & Breads - All / Groceries / Bakery, Baking & Breads /"
//                   },
//                   "166": {
//                       "label": "Sliced Bread - All / Groceries / Bakery, Baking & Breads / Sliced Bread /"
//                   },
//                   "167": {
//                       "label": "Fresh Bakery Breads - All / Groceries / Bakery, Baking & Breads / Fresh Bakery Breads /"
//                   },
//                   "168": {
//                       "label": "Rolls & Buns - All / Groceries / Bakery, Baking & Breads / Rolls & Buns /"
//                   },
//                   "169": {
//                       "label": "Breakfast Breads - All / Groceries / Bakery, Baking & Breads / Breakfast Breads /"
//                   },
//                   "170": {
//                       "label": "Cakes & Cupcakes - All / Groceries / Bakery, Baking & Breads / Cakes & Cupcakes /"
//                   },
//                   "171": {
//                       "label": "Donuts & Breakfast pastries - All / Groceries / Bakery, Baking & Breads / Donuts & Breakfast pastries /"
//                   },
//                   "172": {
//                       "label": "Cookies & Brownies - All / Groceries / Bakery, Baking & Breads / Cookies & Brownies /"
//                   },
//                   "173": {
//                       "label": "Snacks & Foods - All / Groceries / Snacks & Foods /"
//                   },
//                   "174": {
//                       "label": "Noodles, Pasta, Vermicelli - All / Groceries / Snacks & Foods / Noodles, Pasta, Vermicelli /"
//                   },
//                   "175": {
//                       "label": "Breakfast Cereals - All / Groceries / Snacks & Foods / Breakfast Cereals /"
//                   },
//                   "176": {
//                       "label": "Frozen Veggie & Snacks - All / Groceries / Snacks & Foods / Frozen Veggie & Snacks /"
//                   },
//                   "177": {
//                       "label": "Biscuits & Cookies - All / Groceries / Snacks & Foods / Biscuits & Cookies /"
//                   },
//                   "178": {
//                       "label": "Snacks & Namkeen - All / Groceries / Snacks & Foods / Snacks & Namkeen /"
//                   },
//                   "179": {
//                       "label": "Spreads Sauces & Ketchup - All / Groceries / Snacks & Foods / Spreads Sauces & Ketchup /"
//                   },
//                   "180": {
//                       "label": "Ready to cook & Eat - All / Groceries / Snacks & Foods / Ready to cook & Eat /"
//                   },
//                   "181": {
//                       "label": "Pickles & Chutney - All / Groceries / Snacks & Foods / Pickles & Chutney /"
//                   },
//                   "182": {
//                       "label": "Energy & Soft Drinks - All / Groceries / Beverages / Energy & Soft Drinks /"
//                   },
//                   "183": {
//                       "label": "Water - All / Groceries / Beverages / Water /"
//                   },
//                   "184": {
//                       "label": "Health Drink Supplement - All / Groceries / Beverages / Health Drink Supplement /"
//                   },
//                   "185": {
//                       "label": "Tea - All / Groceries / Beverages / Tea /"
//                   },
//                   "186": {
//                       "label": "Coffee - All / Groceries / Beverages / Coffee /"
//                   },
//                   "187": {
//                       "label": "Fruits Juices & Drinks - All / Groceries / Beverages / Fruits Juices & Drinks /"
//                   },
//                   "188": {
//                       "label": "Eggs, Meat & Diary - All / Groceries / Eggs, Meat & Diary /"
//                   },
//                   "189": {
//                       "label": "Eggs - All / Groceries / Eggs, Meat & Diary / Eggs /"
//                   },
//                   "190": {
//                       "label": "Meats & poultry - All / Groceries / Eggs, Meat & Diary / Meats & poultry /"
//                   },
//                   "191": {
//                       "label": "Dairy - All / Groceries / Eggs, Meat & Diary / Dairy /"
//                   },
//                   "192": {
//                       "label": "Chicken - All / Groceries / Eggs, Meat & Diary / Meats & poultry / Chicken /"
//                   },
//                   "193": {
//                       "label": "Mutton - All / Groceries / Eggs, Meat & Diary / Meats & poultry / Mutton /"
//                   },
//                   "194": {
//                       "label": "Beef - All / Groceries / Eggs, Meat & Diary / Meats & poultry / Beef /"
//                   },
//                   "203": {
//                       "label": "Candy - All / Groceries / Candy /"
//                   },
//                   "204": {
//                       "label": "Candy - All / Groceries / Candy / Candy /"
//                   },
//                   "205": {
//                       "label": "Hard Candy & Lollypop - All / Groceries / Candy / Hard Candy & Lollypop /"
//                   },
//                   "206": {
//                       "label": "Fruit flavored and Sour Candies - All / Groceries / Candy / Fruit flavored and Sour Candies /"
//                   },
//                   "207": {
//                       "label": "Caramel & Toffee - All / Groceries / Candy / Caramel & Toffee /"
//                   },
//                   "208": {
//                       "label": "Sugar Free Candy - All / Groceries / Candy / Sugar Free Candy /"
//                   },
//                   "209": {
//                       "label": "Cleaning & Household - All / Groceries / Cleaning & Household /"
//                   },
//                   "210": {
//                       "label": "Detergent & Dishwash - All / Groceries / Cleaning & Household / Detergent & Dishwash /"
//                   },
//                   "211": {
//                       "label": "All Purpose Cleaners - All / Groceries / Cleaning & Household / All Purpose Cleaners /"
//                   },
//                   "212": {
//                       "label": "Fresheners & Repellents - All / Groceries / Cleaning & Household / Fresheners & Repellents /"
//                   },
//                   "218": {
//                       "label": "Stationary - All / Groceries / Stationary /"
//                   },
//                   "219": {
//                       "label": "Office & School Supplies - All / Groceries / Office & School Supplies /"
//                   },
//                   "223": {
//                       "label": "ice-creams - All / Groceries / Frozen  / ice-creams /"
//                   },
//                   "224": {
//                       "label": "Frozen Desserts - All / Groceries / Frozen  / Frozen Desserts /"
//                   },
//                   "225": {
//                       "label": "Beauty & Personal care - All /  Beauty & Personal care /"
//                   },
//                   "226": {
//                       "label": "Beauty - All /  Beauty & Personal care / Beauty /"
//                   },
//                   "227": {
//                       "label": "Bath & Body - All /  Beauty & Personal care / Bath & Body /"
//                   },
//                   "228": {
//                       "label": "shave - All /  Beauty & Personal care / shave /"
//                   },
//                   "229": {
//                       "label": "oral care - All /  Beauty & Personal care / oral care /"
//                   },
//                   "230": {
//                       "label": "Hair care - All /  Beauty & Personal care / Beauty / Hair care /"
//                   },
//                   "231": {
//                       "label": "Hair color - All /  Beauty & Personal care / Hair color /"
//                   },
//                   "232": {
//                       "label": "Skin care - All /  Beauty & Personal care / Beauty / Skin care /"
//                   },
//                   "233": {
//                       "label": "Face care - All /  Beauty & Personal care / Beauty / Face care /"
//                   },
//                   "234": {
//                       "label": "Fragrance - All /  Beauty & Personal care / Beauty / Fragrance /"
//                   },
//                   "235": {
//                       "label": "Make up - All /  Beauty & Personal care / Beauty / Make up /"
//                   },
//                   "236": {
//                       "label": "Nail care - All /  Beauty & Personal care / Beauty / Nail care /"
//                   },
//                   "237": {
//                       "label": "Men's Grooming - All /  Beauty & Personal care / Beauty / Men's Grooming /"
//                   },
//                   "238": {
//                       "label": "Body Moisturizers - All /  Beauty & Personal care / Bath & Body / Body Moisturizers /"
//                   },
//                   "239": {
//                       "label": "Body wash & Shower gel - All /  Beauty & Personal care / Bath & Body / Body wash & Shower gel /"
//                   },
//                   "240": {
//                       "label": "Sun Care - All /  Beauty & Personal care / Bath & Body / Sun Care /"
//                   },
//                   "241": {
//                       "label": "Bar Soap - All /  Beauty & Personal care / Bath & Body / Bar Soap /"
//                   },
//                   "242": {
//                       "label": "Deodorant & Antiperspirant - All /  Beauty & Personal care / Bath & Body / Deodorant & Antiperspirant /"
//                   },
//                   "243": {
//                       "label": "Hand Soap - All /  Beauty & Personal care / Bath & Body / Hand Soap /"
//                   },
//                   "244": {
//                       "label": "Body scrubs & Exfoliators - All /  Beauty & Personal care / Bath & Body / Body scrubs & Exfoliators /"
//                   },
//                   "245": {
//                       "label": "Bubble bath & Soak - All /  Beauty & Personal care / Bath & Body / Bubble bath & Soak /"
//                   },
//                   "246": {
//                       "label": "Body oil - All /  Beauty & Personal care / Bath & Body / Body oil /"
//                   },
//                   "247": {
//                       "label": "Hand Lotion & Creams - All /  Beauty & Personal care / Bath & Body / Hand Lotion & Creams /"
//                   },
//                   "248": {
//                       "label": "Foot care - All /  Beauty & Personal care / Bath & Body / Foot care /"
//                   },
//                   "249": {
//                       "label": "Loofah  - All /  Beauty & Personal care / Bath & Body / Loofah  /"
//                   },
//                   "250": {
//                       "label": "Men's Shave - All /  Beauty & Personal care / shave / Men's Shave /"
//                   },
//                   "251": {
//                       "label": "Women's Shave - All /  Beauty & Personal care / shave / Women's Shave /"
//                   },
//                   "254": {
//                       "label": "Razors - All /  Beauty & Personal care / shave / Razors /"
//                   },
//                   "255": {
//                       "label": "Razor Blades - All /  Beauty & Personal care / shave / Razor Blades /"
//                   },
//                   "256": {
//                       "label": "Hair Clippers - All /  Beauty & Personal care / shave / Hair Clippers /"
//                   },
//                   "257": {
//                       "label": "Body Hair Removal - All /  Beauty & Personal care / shave / Body Hair Removal /"
//                   },
//                   "258": {
//                       "label": "Shaving Gel - All /  Beauty & Personal care / shave / Shaving Gel /"
//                   },
//                   "259": {
//                       "label": "Tooth Brushes - All /  Beauty & Personal care / oral care / Tooth Brushes /"
//                   },
//                   "260": {
//                       "label": "Teeth Whiteners - All /  Beauty & Personal care / oral care / Teeth Whiteners /"
//                   },
//                   "261": {
//                       "label": "Tooth Pastes - All /  Beauty & Personal care / oral care / Tooth Pastes /"
//                   },
//                   "262": {
//                       "label": "Mouth Wash - All /  Beauty & Personal care / oral care / Mouth Wash /"
//                   },
//                   "263": {
//                       "label": "Dental Floss & Picks - All /  Beauty & Personal care / oral care / Dental Floss & Picks /"
//                   },
//                   "264": {
//                       "label": "Children's Oral Care - All /  Beauty & Personal care / oral care / Children's Oral Care /"
//                   },
//                   "266": {
//                       "label": "Mops, Brushes & Scrubs - All / Groceries / Cleaning & Household / Mops, Brushes & Scrubs /"
//                   },
//                   "267": {
//                       "label": "Bins & Bathroom Care - All / Groceries / Cleaning & Household / Bins & Bathroom Care /"
//                   },
//                   "268": {
//                       "label": "Party & Festive Needs - All / Groceries / Cleaning & Household / Party & Festive Needs /"
//                   },
//                   "269": {
//                       "label": "Disposibles - All / Groceries / Cleaning & Household / Disposibles /"
//                   },
//                   "270": {
//                       "label": "Detergent Powders - All / Groceries / Cleaning & Household / Detergent & Dishwash / Detergent Powders /"
//                   },
//                   "271": {
//                       "label": "Fabric Pre-wash - All / Groceries / Cleaning & Household / Detergent & Dishwash / Fabric Pre-wash /"
//                   },
//                   "272": {
//                       "label": "Fabric Post Wash - All / Groceries / Cleaning & Household / Detergent & Dishwash / Fabric Post Wash /"
//                   },
//                   "273": {
//                       "label": "Liquid & Paste Dishwash - All / Groceries / Cleaning & Household / Detergent & Dishwash / Liquid & Paste Dishwash /"
//                   },
//                   "274": {
//                       "label": "Bar & Powder Dishwash - All / Groceries / Cleaning & Household / Detergent & Dishwash / Bar & Powder Dishwash /"
//                   },
//                   "275": {
//                       "label": "Toilet Cleaners - All / Groceries / Cleaning & Household / All Purpose Cleaners / Toilet Cleaners /"
//                   },
//                   "276": {
//                       "label": "Kitchen Glass & Drain - All / Groceries / Cleaning & Household / All Purpose Cleaners / Kitchen Glass & Drain /"
//                   },
//                   "277": {
//                       "label": "Floor & Other Cleaners - All / Groceries / Cleaning & Household / All Purpose Cleaners / Floor & Other Cleaners /"
//                   },
//                   "278": {
//                       "label": "Metal & Furniture Cleaner - All / Groceries / Cleaning & Household / All Purpose Cleaners / Metal & Furniture Cleaner /"
//                   },
//                   "279": {
//                       "label": "Insect Repellant - All / Groceries / Cleaning & Household / Fresheners & Repellents / Insect Repellant /"
//                   },
//                   "280": {
//                       "label": "Mosquito Repellant - All / Groceries / Cleaning & Household / Fresheners & Repellents / Mosquito Repellant /"
//                   },
//                   "281": {
//                       "label": "Air Freshener - All / Groceries / Cleaning & Household / Fresheners & Repellents / Air Freshener /"
//                   },
//                   "282": {
//                       "label": "Utensil Scrub - All / Groceries / Cleaning & Household / Mops, Brushes & Scrubs / Utensil Scrub /"
//                   },
//                   "283": {
//                       "label": "Brooms & Dust bins - All / Groceries / Cleaning & Household / Mops, Brushes & Scrubs / Brooms & Dust bins /"
//                   },
//                   "284": {
//                       "label": "Dust cloth & Wipes - All / Groceries / Cleaning & Household / Mops, Brushes & Scrubs / Dust cloth & Wipes /"
//                   },
//                   "285": {
//                       "label": "Mops & Wipers - All / Groceries / Cleaning & Household / Mops, Brushes & Scrubs / Mops & Wipers /"
//                   },
//                   "286": {
//                       "label": "Toilet cleaning & Other brushes - All / Groceries / Cleaning & Household / Mops, Brushes & Scrubs / Toilet cleaning & Other brushes /"
//                   },
//                   "287": {
//                       "label": "Pooja Needs - All / Groceries / Cleaning & Household / Pooja Needs /"
//                   },
//                   "288": {
//                       "label": "Camphor - All / Groceries / Cleaning & Household / Pooja Needs / Camphor /"
//                   },
//                   "289": {
//                       "label": "Lamp & Lamp Oil - All / Groceries / Cleaning & Household / Pooja Needs / Lamp & Lamp Oil /"
//                   },
//                   "290": {
//                       "label": "Candles - All / Groceries / Cleaning & Household / Pooja Needs / Candles /"
//                   },
//                   "291": {
//                       "label": "Match Boxes - All / Groceries / Cleaning & Household / Pooja Needs / Match Boxes /"
//                   },
//                   "292": {
//                       "label": "Pooja Thali & Bells - All / Groceries / Cleaning & Household / Pooja Needs / Pooja Thali & Bells /"
//                   },
//                   "293": {
//                       "label": "Hangers & Clips - All / Groceries / Cleaning & Household / Bins & Bathroom Care / Hangers & Clips /"
//                   },
//                   "294": {
//                       "label": "Bucket & Mugs - All / Groceries / Cleaning & Household / Bins & Bathroom Care / Bucket & Mugs /"
//                   },
//                   "295": {
//                       "label": "Ropes & Nets - All / Groceries / Cleaning & Household / Bins & Bathroom Care / Ropes & Nets /"
//                   },
//                   "296": {
//                       "label": "Dust Bins - All / Groceries / Cleaning & Household / Bins & Bathroom Care / Dust Bins /"
//                   },
//                   "297": {
//                       "label": "Laundry - All / Groceries / Cleaning & Household / Bins & Bathroom Care / Laundry /"
//                   },
//                   "298": {
//                       "label": "Storage Basket - All / Groceries / Cleaning & Household / Bins & Bathroom Care / Storage Basket /"
//                   },
//                   "299": {
//                       "label": "Soap Cases - All / Groceries / Cleaning & Household / Bins & Bathroom Care / Soap Cases /"
//                   },
//                   "300": {
//                       "label": "Dispensers - All / Groceries / Cleaning & Household / Bins & Bathroom Care / Dispensers /"
//                   },
//                   "301": {
//                       "label": "Bath Stool - All / Groceries / Cleaning & Household / Bins & Bathroom Care / Bath Stool /"
//                   },
//                   "302": {
//                       "label": "Basin & Sets - All / Groceries / Cleaning & Household / Bins & Bathroom Care / Basin & Sets /"
//                   },
//                   "303": {
//                       "label": "Other Plastic Ware - All / Groceries / Cleaning & Household / Bins & Bathroom Care / Other Plastic Ware /"
//                   },
//                   "304": {
//                       "label": "Disposible Plate & Cup - All / Groceries / Cleaning & Household / Party & Festive Needs / Disposible Plate & Cup /"
//                   },
//                   "305": {
//                       "label": "Balloon - All / Groceries / Cleaning & Household / Party & Festive Needs / Balloon /"
//                   },
//                   "306": {
//                       "label": "Seasonal Accessories - All / Groceries / Cleaning & Household / Party & Festive Needs / Seasonal Accessories /"
//                   },
//                   "307": {
//                       "label": "Gift Wraps & Decorations - All / Groceries / Cleaning & Household / Party & Festive Needs / Gift Wraps & Decorations /"
//                   },
//                   "308": {
//                       "label": "Colours & Powder Gifts - All / Groceries / Cleaning & Household / Party & Festive Needs / Colours & Powder Gifts /"
//                   },
//                   "309": {
//                       "label": "Kitchen Rolls - All / Groceries / Cleaning & Household / Disposibles / Kitchen Rolls /"
//                   },
//                   "310": {
//                       "label": "Wet wipes - All / Groceries / Cleaning & Household / Disposibles / Wet wipes /"
//                   },
//                   "311": {
//                       "label": "Pocket Tissue - All / Groceries / Cleaning & Household / Disposibles / Pocket Tissue /"
//                   },
//                   "312": {
//                       "label": "Toilet paper - All / Groceries / Cleaning & Household / Disposibles / Toilet paper /"
//                   },
//                   "313": {
//                       "label": "Garbage Bags - All / Groceries / Cleaning & Household / Disposibles / Garbage Bags /"
//                   },
//                   "314": {
//                       "label": "Cling Wrap - All / Groceries / Cleaning & Household / Disposibles / Cling Wrap /"
//                   },
//                   "315": {
//                       "label": "Tissue Box - All / Groceries / Cleaning & Household / Disposibles / Tissue Box /"
//                   },
//                   "316": {
//                       "label": "Fashion - All / Fashion /"
//                   },
//                   "317": {
//                       "label": "Lingereie - All / Fashion / Lingereie /"
//                   },
//                   "318": {
//                       "label": "Blended Masalas - All / Groceries / Foodgrains, Oils & Masala / Blended Masalas /"
//                   },
//                   "319": {
//                       "label": "Home, Furniture & Applainces - All /  Home, Furniture & Applainces /"
//                   },
//                   "320": {
//                       "label": "Home Furnishings - All /  Home, Furniture & Applainces / Home Furnishings /"
//                   },
//                   "321": {
//                       "label": "Floor Coverings - All /  Home, Furniture & Applainces / Home Furnishings / Floor Coverings /"
//                   },
//                   "322": {
//                       "label": "Mats - All /  Home, Furniture & Applainces / Home Furnishings / Floor Coverings / Mats /"
//                   },
//                   "323": {
//                       "label": "Kitchen  & Dining - All /  Home, Furniture & Applainces / Kitchen  & Dining /"
//                   },
//                   "324": {
//                       "label": "Beaf - All / Groceries / Eggs, Meat & Diary / Meats & poultry / Beaf /"
//                   },
//                   "325": {
//                       "label": "Baby - All /  Baby /"
//                   },
//                   "326": {
//                       "label": "Feeding & Nursing - All /  Baby / Feeding & Nursing /"
//                   },
//                   "327": {
//                       "label": "Bottle Feeding  - All /  Baby / Feeding & Nursing / Bottle Feeding  /"
//                   },
//                   "328": {
//                       "label": "Breast Feeding - All /  Baby / Feeding & Nursing / Breast Feeding /"
//                   },
//                   "329": {
//                       "label": "Baby Food - All /  Baby / Feeding & Nursing / Baby Food /"
//                   },
//                   "330": {
//                       "label": "Baby Food Makers - All /  Baby / Feeding & Nursing / Baby Food Makers /"
//                   },
//                   "331": {
//                       "label": "Toddler Drink & Formula - All /  Baby / Feeding & Nursing / Toddler Drink & Formula /"
//                   },
//                   "332": {
//                       "label": "Dishes & Utensils - All /  Baby / Feeding & Nursing / Dishes & Utensils /"
//                   },
//                   "333": {
//                       "label": "High chairs & Boosters - All /  Baby / Feeding & Nursing / High chairs & Boosters /"
//                   },
//                   "334": {
//                       "label": "Slippy Cups - All /  Baby / Feeding & Nursing / Slippy Cups /"
//                   },
//                   "335": {
//                       "label": "Bips & Burpclothes - All /  Baby / Feeding & Nursing / Bips & Burpclothes /"
//                   },
//                   "336": {
//                       "label": "Drappers & Wipes - All /  Baby / Drappers & Wipes /"
//                   },
//                   "337": {
//                       "label": "Baby Skin Care - All /  Baby / Drappers & Wipes / Baby Skin Care /"
//                   },
//                   "338": {
//                       "label": "Baby Wipes - All /  Baby / Drappers & Wipes / Baby Wipes /"
//                   },
//                   "339": {
//                       "label": "Diapers - All /  Baby / Drappers & Wipes / Diapers /"
//                   },
//                   "340": {
//                       "label": "Diaper Bags - All /  Baby / Drappers & Wipes / Diaper Bags /"
//                   },
//                   "341": {
//                       "label": "Training Pants - All /  Baby / Drappers & Wipes / Training Pants /"
//                   },
//                   "342": {
//                       "label": "Bath & Potty - All /  Baby / Bath & Potty /"
//                   },
//                   "343": {
//                       "label": "Baby Bath - All /  Baby / Bath & Potty / Baby Bath /"
//                   },
//                   "344": {
//                       "label": "Baby Shampoo & Wash - All /  Baby / Bath & Potty / Baby Shampoo & Wash /"
//                   },
//                   "345": {
//                       "label": "Potty Training - All /  Baby / Bath & Potty / Potty Training /"
//                   },
//                   "346": {
//                       "label": "Baby Clothes - All /  Baby / Baby Clothes /"
//                   },
//                   "347": {
//                       "label": "Baby Girl - All /  Baby / Baby Clothes / Baby Girl /"
//                   },
//                   "348": {
//                       "label": "Baby Boy - All /  Baby / Baby Clothes / Baby Boy /"
//                   },
//                   "349": {
//                       "label": "Hand Wash - All /  Beauty & Personal care / Bath & Body / Hand Wash /"
//                   },
//                   "351": {
//                       "label": "Biscuits, Cookies & Rusk - All / Groceries / Snacks & Foods / Biscuits, Cookies & Rusk /"
//                   },
//                   "352": {
//                       "label": "Food Products - All / Groceries / Food Products /"
//                   },
//                   "353": {
//                       "label": "Baking Ingredients - All / Groceries / Bakery, Baking & Breads / Baking Ingredients /"
//                   },
//                   "354": {
//                       "label": "Vibuthi - All / Groceries / Cleaning & Household / Pooja Needs / Vibuthi /"
//                   },
//                   "355": {
//                       "label": "Arts, Crafts & Party Supplies - All /  Arts, Crafts & Party Supplies /"
//                   },
//                   "356": {
//                       "label": "Arts & Crafts - All /  Arts, Crafts & Party Supplies / Arts & Crafts /"
//                   },
//                   "357": {
//                       "label": "Art Supplies - All /  Arts, Crafts & Party Supplies / Arts & Crafts / Art Supplies /"
//                   },
//                   "358": {
//                       "label": "Craft Supplies - All /  Arts, Crafts & Party Supplies / Arts & Crafts / Craft Supplies /"
//                   },
//                   "359": {
//                       "label": "Scrap Booking - All /  Arts, Crafts & Party Supplies / Arts & Crafts / Scrap Booking /"
//                   },
//                   "360": {
//                       "label": "Kid's Arts & Crafts - All /  Arts, Crafts & Party Supplies / Arts & Crafts / Kid's Arts & Crafts /"
//                   },
//                   "361": {
//                       "label": "Beading & Jewelry - All /  Arts, Crafts & Party Supplies / Arts & Crafts / Beading & Jewelry /"
//                   },
//                   "362": {
//                       "label": "Artificial plants & Flowers - All /  Arts, Crafts & Party Supplies / Arts & Crafts / Artificial plants & Flowers /"
//                   },
//                   "363": {
//                       "label": "Party Supplies - All /  Arts, Crafts & Party Supplies / Party Supplies /"
//                   },
//                   "364": {
//                       "label": "Balloons - All /  Arts, Crafts & Party Supplies / Party Supplies / Balloons /"
//                   },
//                   "365": {
//                       "label": "Helium Tanks - All /  Arts, Crafts & Party Supplies / Party Supplies / Helium Tanks /"
//                   },
//                   "366": {
//                       "label": "Party Tablewares - All /  Arts, Crafts & Party Supplies / Party Supplies / Party Tablewares /"
//                   },
//                   "367": {
//                       "label": "Party Decorations - All /  Arts, Crafts & Party Supplies / Party Supplies / Party Decorations /"
//                   },
//                   "368": {
//                       "label": "Party Favors - All /  Arts, Crafts & Party Supplies / Party Supplies / Party Favors /"
//                   },
//                   "369": {
//                       "label": "Special Occassion - All /  Arts, Crafts & Party Supplies / Special Occassion /"
//                   },
//                   "370": {
//                       "label": "Baby Shower - All /  Arts, Crafts & Party Supplies / Special Occassion / Baby Shower /"
//                   },
//                   "371": {
//                       "label": "Wrapping Paper - All /  Arts, Crafts & Party Supplies / Special Occassion / Wrapping Paper /"
//                   },
//                   "372": {
//                       "label": "Greeting Cards - All /  Arts, Crafts & Party Supplies / Special Occassion / Greeting Cards /"
//                   },
//                   "373": {
//                       "label": "VINEGAR - All / Groceries / Food Products / VINEGAR /"
//                   },
//                   "374": {
//                       "label": "Desk & Workspace Organizers - All / Groceries / Stationery / Office Stationaries / Desk & Workspace Organizers /"
//                   },
//                   "375": {
//                       "label": "Pens - All / Groceries / Stationery / Office Stationaries / Pens /"
//                   },
//                   "376": {
//                       "label": "Folders & Filing Products - All / Groceries / Stationery / Office Stationaries / Folders & Filing Products /"
//                   },
//                   "377": {
//                       "label": "Markers & Highlighters - All / Groceries / Stationery / Office Stationaries / Markers & Highlighters /"
//                   },
//                   "378": {
//                       "label": "School Supplies - All / Groceries / Stationery / School Supplies /"
//                   },
//                   "379": {
//                       "label": "Pencils - All / Groceries / Stationery / School Supplies / Pencils /"
//                   },
//                   "380": {
//                       "label": "White Board & Dry Erase Boards - All / Groceries / Stationery / School Supplies / White Board & Dry Erase Boards /"
//                   },
//                   "381": {
//                       "label": "Paper - All / Groceries / Stationery / School Supplies / Paper /"
//                   },
//                   "382": {
//                       "label": "Glues &  Glue Remover - All / Groceries / Stationery / School Supplies / Glues &  Glue Remover /"
//                   },
//                   "383": {
//                       "label": "Calculators - All / Groceries / Stationery / School Supplies / Calculators /"
//                   },
//                   "384": {
//                       "label": "Men - All / Fashion / Men /"
//                   },
//                   "385": {
//                       "label": "`women - All / Fashion / `women /"
//                   },
//                   "386": {
//                       "label": "Kids - All / Fashion / Kids /"
//                   },
//                   "387": {
//                       "label": "Men's Top Wear - All / Fashion / Men / Men's Top Wear /"
//                   },
//                   "388": {
//                       "label": "Men's Bottom Wear - All / Fashion / Men / Men's Bottom Wear /"
//                   },
//                   "389": {
//                       "label": "Men's  Footwear - All / Fashion / Men / Men's  Footwear /"
//                   },
//                   "390": {
//                       "label": "Watches & Accessories - All / Fashion / Men / Watches & Accessories /"
//                   },
//                   "391": {
//                       "label": "Men's Sports Shoes - All / Fashion / Men / Men's  Footwear / Men's Sports Shoes /"
//                   },
//                   "392": {
//                       "label": "Men's Casual Shoes - All / Fashion / Men / Men's  Footwear / Men's Casual Shoes /"
//                   },
//                   "393": {
//                       "label": "Men's Sandals & Floaters - All / Fashion / Men / Men's  Footwear / Men's Sandals & Floaters /"
//                   },
//                   "394": {
//                       "label": "Men's Formal Shoes - All / Fashion / Men / Men's  Footwear / Men's Formal Shoes /"
//                   },
//                   "395": {
//                       "label": "Men's Ethnic Shoes - All / Fashion / Men / Men's  Footwear / Men's Ethnic Shoes /"
//                   },
//                   "396": {
//                       "label": "Active Footwear - All / Fashion / Men / Men's  Footwear / Active Footwear /"
//                   },
//                   "397": {
//                       "label": "Shoe Care - All / Fashion / Men / Men's  Footwear / Shoe Care /"
//                   },
//                   "398": {
//                       "label": "Women's Footwear - All / Fashion / `women / Women's Footwear /"
//                   },
//                   "399": {
//                       "label": "Women's Flat - All / Fashion / `women / Women's Footwear / Women's Flat /"
//                   },
//                   "400": {
//                       "label": "Women's Heels - All / Fashion / `women / Women's Footwear / Women's Heels /"
//                   },
//                   "401": {
//                       "label": "Women's Wedges - All / Fashion / `women / Women's Footwear / Women's Wedges /"
//                   },
//                   "402": {
//                       "label": "Women's Slipper & Flip Flop - All / Fashion / `women / Women's Footwear / Women's Slipper & Flip Flop /"
//                   },
//                   "403": {
//                       "label": "Women's Casual Shoes - All / Fashion / `women / Women's Footwear / Women's Casual Shoes /"
//                   },
//                   "404": {
//                       "label": "Women's sports shoes - All / Fashion / `women / Women's Footwear / Women's sports shoes /"
//                   },
//                   "405": {
//                       "label": "Women's Sneakers - All / Fashion / `women / Women's Footwear / Women's Sneakers /"
//                   },
//                   "406": {
//                       "label": "Women's Walking Shoes - All / Fashion / `women / Women's Footwear / Women's Walking Shoes /"
//                   },
//                   "407": {
//                       "label": "women's Sandals - All / Fashion / `women / Women's Footwear / women's Sandals /"
//                   },
//                   "408": {
//                       "label": "Western & Maternity Wear - All / Fashion / `women / Western & Maternity Wear /"
//                   },
//                   "409": {
//                       "label": "Top wear - All / Fashion / `women / Western & Maternity Wear / Top wear /"
//                   },
//                   "410": {
//                       "label": "Dresses - All / Fashion / `women / Western & Maternity Wear / Dresses /"
//                   },
//                   "411": {
//                       "label": "Jeans - All / Fashion / `women / Western & Maternity Wear / Jeans /"
//                   },
//                   "412": {
//                       "label": "Shorts - All / Fashion / `women / Western & Maternity Wear / Shorts /"
//                   },
//                   "413": {
//                       "label": "Skirts - All / Fashion / `women / Western & Maternity Wear / Skirts /"
//                   },
//                   "414": {
//                       "label": "Jeggings & Tights - All / Fashion / `women / Western & Maternity Wear / Jeggings & Tights /"
//                   },
//                   "415": {
//                       "label": "Trousers - All / Fashion / `women / Western & Maternity Wear / Trousers /"
//                   },
//                   "416": {
//                       "label": "Lingeries & Sleepwear - All / Fashion / `women / Lingeries & Sleepwear /"
//                   },
//                   "417": {
//                       "label": "Bras - All / Fashion / `women / Lingeries & Sleepwear / Bras /"
//                   },
//                   "418": {
//                       "label": "Panties - All / Fashion / `women / Lingeries & Sleepwear / Panties /"
//                   },
//                   "419": {
//                       "label": "Lingerie sets - All / Fashion / `women / Lingeries & Sleepwear / Lingerie sets /"
//                   },
//                   "420": {
//                       "label": "Night dresses & Nighties - All / Fashion / `women / Lingeries & Sleepwear / Night dresses & Nighties /"
//                   },
//                   "421": {
//                       "label": "Shapewear - All / Fashion / `women / Lingeries & Sleepwear / Shapewear /"
//                   },
//                   "422": {
//                       "label": "Camisoles & Slips - All / Fashion / `women / Lingeries & Sleepwear / Camisoles & Slips /"
//                   },
//                   "423": {
//                       "label": "Ethnic Wear - All / Fashion / `women / Ethnic Wear /"
//                   },
//                   "424": {
//                       "label": "Sarees - All / Fashion / `women / Ethnic Wear / Sarees /"
//                   },
//                   "425": {
//                       "label": "Kurtas & Kurtis - All / Fashion / `women / Ethnic Wear / Kurtas & Kurtis /"
//                   },
//                   "426": {
//                       "label": "Dress Material - All / Fashion / `women / Ethnic Wear / Dress Material /"
//                   },
//                   "427": {
//                       "label": "Salwar Suits - All / Fashion / `women / Ethnic Wear / Salwar Suits /"
//                   },
//                   "428": {
//                       "label": "Duppattas - All / Fashion / `women / Ethnic Wear / Duppattas /"
//                   },
//                   "429": {
//                       "label": "Ethnic Bottoms - All / Fashion / `women / Ethnic Bottoms /"
//                   },
//                   "430": {
//                       "label": "Leggings & Churidars  - All / Fashion / `women / Ethnic Bottoms / Leggings & Churidars  /"
//                   },
//                   "431": {
//                       "label": "Palazzos - All / Fashion / `women / Ethnic Bottoms / Palazzos /"
//                   },
//                   "432": {
//                       "label": "Patiala - All / Fashion / `women / Ethnic Bottoms / Patiala /"
//                   },
//                   "433": {
//                       "label": "Personal care - All / Fashion / `women / Personal care /"
//                   },
//                   "434": {
//                       "label": "Sanitary pads - All / Fashion / `women / Personal care / Sanitary pads /"
//                   },
//                   "435": {
//                       "label": "Wellness & Common Pharmacy - All /  Beauty & Personal care / Wellness & Common Pharmacy /"
//                   },
//                   "436": {
//                       "label": "Pain Relievers - All /  Beauty & Personal care / Wellness & Common Pharmacy / Pain Relievers /"
//                   },
//                   "437": {
//                       "label": "Hand Sanitizer - All /  Beauty & Personal care / Bath & Body / Hand Sanitizer /"
//                   },
//                   "438": {
//                       "label": "Iron box  - All /  Home, Furniture & Applainces / Home Furnishings / Iron box  /"
//                   },
//                   "439": {
//                       "label": "PepsiCo  - All / Groceries / Beverages / PepsiCo  /"
//                   }
//               },
//               "trim": false
//           },
//           "active": {
//               "type": "select",
//               "label": "Activation",
//               "description": "Active will make the category visible in site",
//               "required": true,
//               "trim": false,
//               "items": {
//                   "active": {
//                       "label": "Active"
//                   },
//                   "disable": {
//                       "label": "Disable"
//                   }
//               }
//           },
//           "category_attributes": {
//               "type": "category_attributes",
//               "label": "Attributes",
//               "description": "Choose attribute for category",
//               "required": false,
//               "trim": false,
//               "items": {
//                   "2": {
//                       "name": "Color"
//                   },
//                   "3": {
//                       "name": "Duration"
//                   },
//                   "4": {
//                       "name": "Size"
//                   },
//                   "12": {
//                       "name": "Linears"
//                   },
//                   "16": {
//                       "name": "Type"
//                   },
//                   "19": {
//                       "name": "Weight"
//                   },
//                   "26": {
//                       "name": "Flavour"
//                   },
//                   "27": {
//                       "name": "Battery Life"
//                   },
//                   "28": {
//                       "name": "Model Name"
//                   },
//                   "29": {
//                       "name": "Brand"
//                   },
//                   "30": {
//                       "name": "Model Type"
//                   },
//                   "31": {
//                       "name": "Applied For"
//                   },
//                   "32": {
//                       "name": "Hair Type"
//                   },
//                   "33": {
//                       "name": "Ideal For"
//                   },
//                   "34": {
//                       "name": "Organic"
//                   },
//                   "35": {
//                       "name": "Container Type"
//                   },
//                   "36": {
//                       "name": "Shelf Life"
//                   },
//                   "37": {
//                       "name": "Used for"
//                   },
//                   "38": {
//                       "name": "Concern"
//                   },
//                   "39": {
//                       "name": "Usage Type"
//                   },
//                   "40": {
//                       "name": "Gourmet"
//                   },
//                   "41": {
//                       "name": "Added Preservatives"
//                   },
//                   "42": {
//                       "name": "Ingredients"
//                   },
//                   "43": {
//                       "name": "Nutrient Content"
//                   },
//                   "44": {
//                       "name": "Maximum Shelf Life"
//                   },
//                   "45": {
//                       "name": "Form Factor"
//                   },
//                   "46": {
//                       "name": "Common Name"
//                   },
//                   "47": {
//                       "name": "Pack Of"
//                   },
//                   "48": {
//                       "name": "Is perishable"
//                   },
//                   "49": {
//                       "name": "Dietary Preference"
//                   },
//                   "50": {
//                       "name": "Country Of Origin"
//                   },
//                   "51": {
//                       "name": "Quantity"
//                   },
//                   "52": {
//                       "name": "Availability"
//                   },
//                   "53": {
//                       "name": "Seasonal"
//                   },
//                   "54": {
//                       "name": "additives"
//                   },
//                   "55": {
//                       "name": "Fragrance"
//                   },
//                   "56": {
//                       "name": "Application Area"
//                   },
//                   "57": {
//                       "name": "Skin Type"
//                   },
//                   "58": {
//                       "name": "Food Preference"
//                   }
//               }
//           }
//       }
//   }
// }