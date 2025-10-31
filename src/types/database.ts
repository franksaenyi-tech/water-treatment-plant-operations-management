
export type UserRole = 'operator' | 'supervisor' | 'manager' | 'admin' | 'guest';

export type ShiftType = 'day' | 'night';

export interface User {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface PumpReading {
  id: string;
  shift_date: string;
  shift_type: ShiftType;
  hl1: number;
  hl2: number;
  hl3: number;
  hl4: number;
  llf1: number;
  llf2: number;
  bw1: number;
  bw2: number;
  kcb: number;
  total_production: number;
  service_water: number;
  water_supplied: number;
  plant_downtime: number;
  entered_by: string;
  created_at: string;
  updated_at: string;
}

export interface ChemicalInventory {
  id: string;
  shift_date: string;
  shift_type: ShiftType;
  chemical_type: 'alum' | 'chlorine';
  opening_balance: number;
  received: number;
  used: number;
  issued: number;
  closing_balance: number;
  entered_by: string;
  created_at: string;
  updated_at: string;
}

export interface Database {
  public: {
    Tables: {
      users: {
        Row: User;
        Insert: Omit<User, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<User, 'id' | 'created_at' | 'updated_at'>>;
      };
      pump_readings: {
        Row: PumpReading;
        Insert: Omit<PumpReading, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<PumpReading, 'id' | 'created_at' | 'updated_at'>>;
      };
      chemical_inventory: {
        Row: ChemicalInventory;
        Insert: Omit<ChemicalInventory, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<ChemicalInventory, 'id' | 'created_at' | 'updated_at'>>;
      };
    };
  };
}