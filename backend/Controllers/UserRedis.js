const {
  incr,
  expire,
  ttl,
  get,
  set,
  incrby,
  decrby,
  exists,
  setnx,
} = require("../models/Limited");

const UserCtrl = {
  UserSpam: async (req, res, next) => {
    try {
      const GetIPUser =
        req.headers["x-forwarded-for"] || req.connection.remoteAddress;
      const numRequests = await incr(GetIPUser);
      let _ttl;
      if (numRequests === 1) {
        await expire(GetIPUser, 60);
        _ttl = 60;
      } else {
        _ttl = await ttl(GetIPUser);
      }

      if (numRequests > 10) {
        return res.status(503).json({
          status: "503",
          _ttl,
          message: "Server is Busy",
          numRequests,
        });
      }
      return res.json({
        status: "200",
        numRequests,
        element: [
          { id: 1, name: "react" },
          { id: 2, name: "vue" },
        ],
      });
    } catch (error) {
      throw new Error(error);
    }
  },
  UserBuyGoodsMany: async (req, res, next) => {
    //cách 1 Đúng ở trường hợp là 1 ông mua hàng còn nhiều ông mua cùng lúc là sai
    const Time = new Date().getTime();
    console.log(`Time Request:::::${Time}`);
    //? Giả sử số lượng tồn kho là 10
    const slTonKho = 10;
    //? Tên của sản phẩm
    const keyName = "iPhone13";
    //? Giả sử mỗi lần mua thì số lượng tiêu thụ hàng tồn kho là 1
    const slMua = 1;
    //?Số lượng đã bán ra,nếu chưa bán thì set=0,còn nếu  bán thì update+1 mỗi lần user mua thành công.
    const getKey = await exists(keyName);
    if (!getKey) {
      //?set=0
      await set(keyName, 0);
    }
    //? lấy số lượng bán ra
    let slBanRa = await get(keyName);
    console.log(
      `Trước khi user đặt hàng thành công thì số lượng bán ra là ===`,
      slBanRa
    );
    //? nếu sô lượng bán ra + số lượng mua >số lượng tồn kho trả về sai
    if (+slBanRa + slMua > slTonKho) {
      console.log("Hết Hàng");
      return res.json({
        status: 400,
        msg: "Hết hàng",
        Time,
      });
    }
    //?Nếu đặt thành công
    slBanRa = await incrby(keyName, slMua);
    console.log(
      `sau khi user đặt hàng thành công thì số lượng bán ra là===`,
      slBanRa
    );
    if (slBanRa > slTonKho) {
      await set("banquaroi", slBanRa - slTonKho);
    }
    return res.json({
      status: 200,
      msg: "success",
      Time,
    });
  },
  UserBuyGoodsManyC2: async (req, res, next) => {
    //?cách 2 đúng nhiều ông mua hàng đúng
    const Time = new Date().getTime();
    console.log(`Time Request:::::${Time}`);
    //? Giả sử số lượng tồn kho là 10
    const slTonKho = 10;
    //? Tên của sản phẩm
    const keyName = "iPhone13";
    //? Giả sử mỗi lần mua thì số lượng tiêu thụ hàng tồn kho là 1
    const slMua = 1;
    //?Số lượng đã bán ra,nếu chưa bán thì set=0,còn nếu  bán thì update+1 mỗi lần user mua thành công.
    const getKey = await exists(keyName);
    if (!getKey) {
      //?Nếu có đồng thời 2 hay nhiều người truy cập mua hàng cùng 1 lúc,thì sử dụng
      //? setnx sẽ không được đặt lại
      await setnx(keyName, 0);
    }
    //? lấy số lượng bán ra
    let slBanRa = await get(keyName);
    console.log(
      `Trước khi user đặt hàng thành công thì số lượng bán ra là ===`,
      slBanRa
    );
    //? Lấy số lượng bán ra
    slBanRa = await incrby(keyName, slMua);
    if (slBanRa > slTonKho) {
      console.log("Hết Hàng");
      return res.json({
        status: 400,
        msg: "Hết hàng",
        Time,
      });
    }
    //?Nếu đặt thành công
    console.log(
      `sau khi user đặt hàng thành công thì số lượng bán ra là===`,
      slBanRa
    );
    if (slBanRa > slTonKho) {
      await set("banquaroi", slBanRa - slTonKho);
    }
    return res.json({
      status: 200,
      msg: "success",
      Time,
    });
  },
};
module.exports = UserCtrl;
