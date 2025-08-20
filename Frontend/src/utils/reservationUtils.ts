export const SERVICE_FEES = 30;
export const TOURIST_TAX = 12;


export const calculateTotalDays = (checkInDate, checkOutDate) => {
    if (!checkInDate || !checkOutDate) return 0;
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
};

export const calculateTotalAmount = ({daily, discount, totalDays}) => {
    const subtotal = daily * totalDays;
    const discountAmount = subtotal * (discount || 0);
    return subtotal - discountAmount + SERVICE_FEES + TOURIST_TAX;
};
