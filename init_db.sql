-- Run this entire script in the Supabase "SQL Editor"

-- 1. Create the Room Categories table
CREATE TABLE IF NOT EXISTS public.room_categories (
  id text PRIMARY KEY,
  name text NOT NULL,
  base_price numeric NOT NULL,
  description text NOT NULL,
  images text[] DEFAULT '{}'::text[]
);

-- 2. Insert the initial mock data (Wait to run this until after you upload the images up to you!)
INSERT INTO public.room_categories (id, name, base_price, description, images)
VALUES
  ('standard', 'Standard Room', 1499, 'Perfect for quick stays and solo travelers. Features modern amenities and a comfortable bed.', ARRAY[
    '/Standard 103/103A.png', '/Standard 103/103B.png', '/Standard 103/103C.png', '/Standard 103/103D.png',
    '/Standard 106/106A.png', '/Standard 106/106B.png', '/Standard 106/106C.png', '/Standard 106/106D.png', '/Standard 106/106E.png',
    '/Standard 203/203A.png', '/Standard 203/203B.png', '/Standard 203/203C.png', '/Standard 203/203D.png', '/Standard 203/203E.png'
  ]),
  ('deluxe', 'Deluxe Room', 1939, 'A cozy, elegant space perfect for solo travelers and couples. Features plush bedding and enhanced views.', ARRAY[
    '/Deluxe 101/101A.png', '/Deluxe 101/101B.png', '/Deluxe 101/101C.png', '/Deluxe 101/101D.png',
    '/Deluxe 102/102A.png', '/Deluxe 102/102B.png', '/Deluxe 102/102C.png', '/Deluxe 102/102D.png', '/Deluxe 102/102E.png', '/Deluxe 102/102F.png',
    '/Deluxe 105/105A.png', '/Deluxe 105/105B.png', '/Deluxe 105/105C.png', '/Deluxe 105/105D.png',
    '/Deluxe 201/201A.png', '/Deluxe 201/201B.png', '/Deluxe 201/201C.png', '/Deluxe 201/201D.png', '/Deluxe 201/201E.png',
    '/Deluxe 202/202A.png', '/Deluxe 202/202B.png', '/Deluxe 202/202C.png', '/Deluxe 202/202D.png'
  ]),
  ('suite', 'Royal Suite', 3499, 'The ultimate luxury experience with premium regal interiors, expansive bathroom, and exclusive services.', ARRAY[
    '/Suite 204/204A.png', '/Suite 204/204B.png', '/Suite 204/204C.png', '/Suite 204/204D.png', '/Suite 204/204E.png', '/Suite 204/204F.png', '/Suite 204/204G.png'
  ]);

-- 3. Create Bookings table 
CREATE TABLE IF NOT EXISTS public.bookings (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  guest_name text NOT NULL,
  phone text NOT NULL,
  check_in date NOT NULL,
  guests integer DEFAULT 1,
  total_amount numeric NOT NULL,
  items jsonb NOT NULL,
  payment_status text DEFAULT 'pending'
);

-- 4. Enable public read access for the rooms (important for fetching on the frontend unauthenticated)
ALTER TABLE public.room_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to room categories"
ON public.room_categories
FOR SELECT TO public
USING (true);

-- Enable public insert for bookings (checkout)
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert to bookings"
ON public.bookings
FOR INSERT TO public
WITH CHECK (true);
