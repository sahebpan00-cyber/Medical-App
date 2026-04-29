# JaanJivan Component Documentation

## 🎯 Complete Component Inventory

### Page Components

#### 1. Home Page
**File:** `src/pages/Home.jsx`
**Components Used:**
- Slider (Hero Banner)
- Facilities (Services Grid)
- MedicalInfo (Stats & Benefits)
- Hero (Secondary CTA Section)

---

### Layout Components

#### 1. Navbar (Main Navigation)
**Files:**
- `src/components/Layout/Navbar/Navbar.jsx`
- `src/components/Layout/Navbar/Navbar.css`

**Features:**
- Sticky positioning (z-index: 100)
- Logo and brand name with gradient text
- Desktop navigation menu with active states
- Login/Register buttons
- "Book Appointment" CTA button
- Mobile hamburger menu toggle
- Smooth transitions and hover effects

**Imports:**
- React Router (NavLink)
- React Icons (FaBars, FaTimes)
- Topbar component

**CSS Classes:**
- `.navbar-container` - Main wrapper (sticky)
- `.navbar` - Flex container
- `.navbar-logo` - Logo section
- `.brand-logo` - Logo image
- `.brand-name` - Company name with gradient
- `.nav-menu` - Navigation list
- `.nav-item` - Individual nav item
- `.nav-link` - Navigation link with underline animation
- `.nav-link.active` - Active state
- `.navbar-auth` - Auth buttons container
- `.mobile-menu-toggle` - Hamburger menu button

---

#### 2. Topbar (Header Info)
**Files:**
- `src/components/Layout/Navbar/Topbar.jsx`
- `src/components/Layout/Navbar/Topbar.css`

**Features:**
- Contact information display
- Emergency call number
- Operating hours
- Email address
- Ambulance number
- Gradient background (teal to dark teal)
- React Icons integration

**Imports:**
- React Icons (FaPhone, FaClock, FaEnvelope, FaAmbulance)

**CSS Classes:**
- `.topbar-container` - Main container with gradient
- `.topbar-content` - Flex wrapper
- `.topbar-item` - Individual info item with icon

**Responsive:**
- Desktop: All items visible with text
- Tablet: Items with reduced gap
- Mobile: Icons only, no text

---

#### 3. NavMenu
**File:** `src/components/Layout/Navbar/NavMenu.jsx`

**Features:**
- Navigation menu items
- Active state styling
- Scroll-to anchor links
- React Router navigation links

**Routes:**
- Home (`/`)
- About (`/about`)
- Doctors (`/doctors`)
- Services (anchor link)
- Contact (`/contact`)

---

### Content Components

#### 1. Slider (Hero Banner)
**Files:**
- `src/components/slider/Slider.jsx`
- `src/components/slider/Slider.css`

**Features:**
- Swiper carousel with auto-play (5s delay)
- Navigation arrows (previous/next)
- Pagination dots
- 2 slide variations with different messages
- Animated text (slide in effects)
- Decorative floating elements
- Gradient backgrounds (teal/green/cyan)
- "Book Appointment" and "Find a Doctor" CTA buttons
- Full-width banner (600px height desktop)

**Components Used:**
- Swiper, SwiperSlide
- FaCalendarAlt, FaStethoscope icons

**CSS Classes:**
- `.slider-section` - Main container
- `.hero-swiper` - Swiper instance
- `.slider-slide` - Individual slide
- `.slide-background` - Gradient background
- `.slide-decoration-1/.2` - Floating elements
- `.slide-content` - Content wrapper
- `.slide-title` - Main heading
- `.slide-subtitle` - Secondary heading
- `.slide-description` - Description text
- `.slide-buttons` - CTA button container
- `.btn-white` - White button style
- `.btn-outline-white` - Outlined white button

**Animations:**
- slideInDown (title)
- slideInUp (subtitle, description, buttons)
- float (decorative elements)

**Responsive:**
- Desktop: 600px height, large text
- Tablet: 500px height, adjusted layout
- Mobile: 400px height, hidden navigation arrows

---

#### 2. Facilities (Services Grid)
**Files:**
- `src/components/Statics/Facilities.jsx`
- `src/components/Statics/Facilities.css`

**Features:**
- 8 service cards in responsive grid
- Icon + name + description + hover CTA
- Colored top border (unique per service)
- Hover effects (lift, scale, color change)
- Icon background wrapper with gradient
- Smooth transitions

**Services:**
1. General Care - Primary healthcare
2. Specialist Doctors - Expert consultations
3. Pathology Lab - Diagnostic testing
4. Dental Care - Dental treatments
5. Online Consultation - Video consultation
6. 24×7 Emergency - Emergency services
7. Cardiology - Cardiac care
8. Medical Imaging - Diagnostic imaging

**CSS Classes:**
- `.facilities-section` - Main container
- `.facility-card` - Service card
- `.facility-icon-wrapper` - Icon background
- `.facility-icon` - Icon element
- `.facility-name` - Service name
- `.facility-description` - Service description
- `.facility-hover-cta` - "Learn More" text on hover

**Grid Breakpoints:**
- Desktop: 4 columns (auto-fit, minmax 260px)
- Tablet (1024px): 2 columns
- Mobile (640px): 1 column

---

#### 3. MedicalInfo (Stats & Benefits)
**Files:**
- `src/components/MedicalInfo/MedicalInfo.jsx`
- `src/components/MedicalInfo/MedicalInfo.css`

**Features:**
- Two-column layout (content + stats)
- Benefits list with check mark icons
- 4 stat cards with metrics
- "Why Choose JaanJivan?" badge
- CTA button
- Trust-building narrative

**Stats Displayed:**
1. 500+ Certified Doctors
2. 50K+ Happy Patients
3. 15+ Years of Service
4. 100% Patient Satisfaction

**Benefits:**
- Board-certified and experienced doctors
- Modern diagnostic equipment
- Comprehensive patient care
- Emergency support 24/7
- Transparent pricing
- Patient-focused approach

**CSS Classes:**
- `.medical-info-section` - Main container
- `.medical-info-wrapper` - Two-column grid
- `.medical-info-content` - Left content
- `.info-badge` - Badge element
- `.info-title` - Main title (gradient text)
- `.info-description` - Description paragraph
- `.benefits-list` - Benefits container
- `.benefit-item` - Individual benefit
- `.benefit-icon` - Check icon
- `.benefit-text` - Benefit text
- `.medical-info-visual` - Right stats container
- `.stats-grid` - Stats grid (2 columns)
- `.stat-box` - Individual stat card
- `.stat-icon-wrapper` - Icon background
- `.stat-icon` - Icon element
- `.stat-content` - Stat text container
- `.stat-value` - Large number
- `.stat-label` - Stat label text

**Responsive:**
- Desktop: 2 columns, side by side
- Tablet (768px): Stack, 2 column stats
- Mobile (480px): Full width, 1 column stats

---

#### 4. Hero (Secondary Section)
**Files:**
- `src/components/Hero/Hero.jsx`
- `src/components/Hero/Hero.css`

**Features:**
- Two-column layout
- Doctor illustration (SVG)
- Heading and subtitle
- CTA buttons
- Trust indicators (stats inline)
- Animated on load

**Content:**
- "Book Trusted Doctors Anytime, Anywhere"
- Premium healthcare messaging
- "Book Appointment" and "Find a Doctor" buttons

---

#### 5. Footer
**Files:**
- `src/components/Footer/Footer.jsx`
- `src/components/Footer/Footer.css`

**Features:**
- Dark gradient background
- 4-column grid layout
- Footer bottom section
- Social media links
- Contact information
- Legal links

**Sections:**

1. **About JaanJivan**
   - Company description
   - Social media links (Facebook, Instagram, Twitter, LinkedIn)

2. **Quick Links**
   - Home, About Us, Services, Doctors, Contact

3. **Our Services**
   - General Care, Dental, Pathology, Emergency, Online

4. **Contact Info**
   - Phone (clickable tel link)
   - Email (clickable mailto link)
   - Address with icon

**Footer Bottom:**
- Copyright notice with year
- Legal links (Privacy Policy, Terms of Service, Cookie Policy)

**CSS Classes:**
- `.footer` - Main footer container
- `.footer-content` - Top section
- `.footer-grid` - Section grid
- `.footer-section` - Individual section
- `.footer-title` - Section heading with underline animation
- `.footer-text` - Description text
- `.social-links` - Social icons container
- `.social-link` - Individual social icon
- `.footer-links` - Links list
- `.footer-links a` - Link with underline animation
- `.contact-item` - Contact info item
- `.contact-icon` - Contact icon
- `.contact-label` - Label text
- `.contact-link` - Clickable contact link
- `.contact-text` - Contact description
- `.footer-bottom` - Copyright section
- `.footer-bottom-content` - Content wrapper
- `.copyright` - Copyright text
- `.brand` - Brand name in copyright
- `.footer-legal` - Legal links container
- `.separator` - Separator between links

**Responsive:**
- Desktop: 4 columns
- Tablet (1024px): 2 columns
- Mobile (768px): 1 column, centered text
- Small Mobile (480px): Optimized spacing, centered

---

### Global Styles

**File:** `src/index.css`

**Imports:**
- All component CSS files
- Global styles and variables

**CSS Variables:**
- **Colors:** Teal, dark teal, green, cyan, amber, etc.
- **Spacing:** xs (0.25rem) to 3xl (4rem)
- **Typography:** Font sizes xs to 4xl
- **Border Radius:** sm to full
- **Shadows:** sm to xl
- **Transitions:** fast, base, slow

**Global Classes:**
- `.btn` - Base button
- `.btn-primary` - Primary button (teal gradient)
- `.btn-secondary` - Secondary button (outlined)
- `.btn-lg` - Large button
- `.btn-sm` - Small button
- `.container` - Max-width wrapper
- `.section` - Section padding
- `.card` - Card styling
- Utility classes (text-center, flex, etc.)

---

## 🎨 Color Palette Reference

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Teal | #0ea5a5 | Main brand color |
| Dark Teal | #0d8b8b | Darker variant |
| Light Teal | #14b8a6 | Lighter variant |
| Medical Green | #10b981 | Accent color |
| Cyan | #06b6d4 | Light accent |
| Amber | #f59e0b | Warning/attention |
| Red | #ef4444 | Emergency |
| Pink | #ec4899 | Cardiology |
| Dark Text | #1e293b | Primary text |
| Gray Text | #64748b | Secondary text |
| White | #ffffff | Background |
| Light Gray | #f8fafc | Light background |

---

## 📱 Responsive Design System

**Breakpoints:**
- **Desktop:** 1024px+
- **Tablet:** 768px - 1023px
- **Mobile:** Below 768px
- **Small Mobile:** Below 480px

**Responsive Patterns:**
- Grid: auto-fit with minmax
- Typography: clamp() for fluid sizing
- Spacing: Adjusted with variables
- Visibility: Hidden elements on mobile

---

## 🔄 Data Flow

```
App (Router)
├── Navbar (Static)
├── Home (Route /)
│   ├── Slider (Hero)
│   ├── Facilities (Services)
│   ├── MedicalInfo (Stats)
│   └── Hero (Secondary)
├── Other Routes
└── Footer (Static)
```

---

## 🚀 Performance Optimizations

✅ Efficient CSS (variables, reusable classes)
✅ Smooth transitions (not animation heavy)
✅ Responsive images (SVG icons)
✅ Lazy-loading ready component structure
✅ Optimized media queries
✅ Semantic HTML for accessibility

---

## 📚 File Summary

| File | Purpose | Lines | Status |
|------|---------|-------|--------|
| Navbar.jsx | Main navigation | 51 | ✅ Complete |
| Navbar.css | Navbar styling | 321 | ✅ Complete |
| Topbar.jsx | Header info | 27 | ✅ Complete |
| Topbar.css | Topbar styling | 108 | ✅ Complete |
| Slider.jsx | Hero carousel | 82 | ✅ Complete |
| Slider.css | Slider styling | 328 | ✅ Complete |
| Facilities.jsx | Services grid | 77 | ✅ Complete |
| Facilities.css | Facilities styling | 171 | ✅ Complete |
| MedicalInfo.jsx | Stats section | 103 | ✅ Complete |
| MedicalInfo.css | Medical info styling | 293 | ✅ Complete |
| Footer.jsx | Footer section | 133 | ✅ Complete |
| Footer.css | Footer styling | 246 | ✅ Complete |
| Home.jsx | Landing page | 18 | ✅ Complete |
| index.css | Global styles | 316 | ✅ Complete |

---

**Total:** 2,274+ lines of professional, production-ready code

**Status:** ✅ COMPLETE & READY FOR DEPLOYMENT

