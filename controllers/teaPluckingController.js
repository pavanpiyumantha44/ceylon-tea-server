import prisma from "../lib/prisma.js";

export const createStockItem = async(req,res)=>{
    try {
        const {name,category,quantity,unit,unitPrice} = req.body
        if(!name || !category || !quantity|| !unitPrice){
            return res.status(400).json({success:false,message:`All Valid fields required!`})
        }
        const stockItem = await prisma.stock.create({
            data:{name:name,category:category,quantity:parseFloat(quantity),unit:unit,unitPrice:parseFloat(unitPrice)}
        })
        if(stockItem){
            return res.status(201).json({success:true,message:"Stock Item created successfully!"});
        }else{
            return res.status(500).json({success:false,message:`Failed to create stock item!`})
        }
    } catch (error) {
        return res.status(500).json({success:false,message:`Server error in creating stock item!, ${error.message}`})
    }
}

export const getAllStockItems = async(req,res)=>{
    try {
        const stockItems = await prisma.stock.findMany({
            where:{isDeleted:'N'}
        })
         if(stockItems){
            return res.status(201).json({success:true,message:"Stock Items fetched successfully!",data:stockItems});
        }else{
            return res.status(500).json({success:false,message:`Failed to fetch stock items!`})
        }
    } catch (error) {
        return res.status(500).json({success:false,message:`Server error in fetching stock items!, ${error.message}`})
    }
}

export const getStockItem = async(req,res)=>{
    try {
        const {id} = req.params;
        const stockItem = await prisma.stock.findUnique({
            where:{itemId:id}
        });
        if(stockItem){
             return res.status(200).json({success:true,message:"Stock Item fetched successfully!",data:stockItem});
        }else{
            return res.status(500).json({success:false,message:`Failed to fetch stock item!`})
        }
    } catch (error) {
        return res.status(500).json({success:false,message:`Server error in fetching stock item!, ${error.message}`})
    }
}

export const updateStockItem = async(req,res)=>{
     try {
        const {id} = req.params;
        const {name,category,quantity,unit,unitPrice} = req.body
        if(!name || !category || !quantity || !unit || !unitPrice){
            return res.status(400).json({success:false,message:`All Valid fields required!`})
        }
        const updatedItem = await prisma.stock.update({
            where:{itemId:id},
            data:{name:name,category:category,quantity:quantity,unit:unit,unitPrice:unitPrice,updatedAt:new Date()}
        });
        if(updatedItem){
             return res.status(200).json({success:true,message:"Stock Item updated successfully!",data:updatedItem});
        }else{
            return res.status(500).json({success:false,message:`Failed to updated stock item!`})
        }
    } catch (error) {
        return res.status(500).json({success:false,message:`Server error in updating stock item!, ${error.message}`})
    }
}

export const addSingleRecord = async (req, res) => {
  try {
    const { personId, weightKg, ratePerKg, totalPayment, date } = req.body;

    if (!personId || !weightKg || !ratePerKg || !totalPayment || !date) {
      return res.status(400).json({ success: false, message: "All valid fields are required!" });
    }

    const recordDate = new Date(date);

    const existingRecord = await prisma.teaPlucking.findFirst({
      where: {
        personId: personId,
        date: recordDate,
      },
    });

    if (existingRecord) {
      return res.status(409).json({
        success: false,
        message: "Tea plucking record already exists for this worker on this date.",
      });
    }

    const teaRecord = await prisma.teaPlucking.create({
      data: {
        personId: personId,
        date: recordDate,
        weightKg: weightKg,
        ratePerKg: ratePerKg,
        totalPayment: totalPayment,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Tea Record created successfully!",
      data: teaRecord,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error in creating Tea Record! ${error.message}`,
    });
  }
};

export const addBulkRecords = async (req, res) => {
  try {
    const teaRecords = req.body;

    if (!teaRecords || !Array.isArray(teaRecords) || teaRecords.length === 0) {
      return res.status(400).json({ success: false, message: "No tea records provided!" });
    }

    const formattedRecords = teaRecords.map(record => ({
      personId: record.personId,
      date: new Date(record.date),
      weightKg: record.weightKg,
      ratePerKg: record.ratePerKg,
      totalPayment: record.totalPayment,
    }));

    const results = [];

    for (const record of formattedRecords) {
      const exists = await prisma.teaPlucking.findFirst({
        where: {
          personId: record.personId,
          date: record.date
        }
      });

      if (exists) {
        results.push({ ...record, status: "skipped", reason: "Already exists for this date" });
      } else {
        await prisma.teaPlucking.create({ data: record });
        results.push({ ...record, status: "inserted" });
      }
    }

    return res.status(201).json({
      success: true,
      message: "Tea Records processed",
      results
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error in creating Tea Records! ${error.message}`
    });
  }
};

export const getAllRecords = async(req,res)=>{
    try {
        const allTeaRecords = await prisma.teaPlucking.findMany({
            where:{isDeleted:'N'},
            include:{
                person : true
            }
        })
        if(allTeaRecords){
            return res.status(201).json({success:true,message:"Tea Records fetched successfully!",data:allTeaRecords});
        }else{
            return res.status(500).json({success:false,message:`Failed to fetch tea records!`})
        }
    } catch (error) {
        return res.status(500).json({success:false,message:`Server error in fetching tea records!, ${error.message}`})
    }
}