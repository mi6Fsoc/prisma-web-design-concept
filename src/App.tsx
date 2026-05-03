/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";

export default function App() {
  return (
    <main className="bg-black min-h-screen text-primary overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Hero />
      <About />
      <Features />
    </main>
  );
}
