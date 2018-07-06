export class myord{
  constructor(public o_id:number,
    public o_status:string,
    public o_date?:string,
    public amount?:number,
  public fk_c_id?:string,
  public fk_p_id?:number,
  public p_id?:number,
  public p_name?:string,
  public price?:number,
  public img?:string,
  public color?:string,
  public mfg?:string,
  public fk_cat_id?:number,
  public p_soh?:number,
  public p_des?:string,
  public c_id?:string,
    public Password?:string,
  public c_name?:string,
  public age?:number,
  public mob?:string,
  public city?:string,
  public gender?:string,
  public address?:string,
)
  {
  }
}
