#include <cstdlib>
#include <cstdio>
#include <cstring>
#include <cstdint>

#include <vector>
#include <fstream>
#include <iostream>
#include <vector>

uint32_t gLinecount_r = 0;
uint32_t gLinecount_w = 0;

void file_w(std::ofstream *wstream, std::string wstr) {
    wstream->write(wstr.c_str(), wstr.length()); 
    gLinecount_w++;
}

int main(int argc, char* argv[]) {
    if (argc > 2) {
        std::vector<std::string> filelines;
        
        std::string filename_md(argv[1]);
        std::string outdir_html(argv[2]);
        std::ifstream file_md(filename_md);

        if (file_md.is_open()) {
            uint8_t idxa = filename_md.find_last_of("/");
            uint8_t idxb = filename_md.find_last_of(".");
            std::string filename_html(outdir_html + filename_md.substr(filename_md.find_last_of("/"), idxb - idxa) + ".html");
            std::ofstream file_html(filename_html);
            if (file_html.is_open()) {
                file_w(&file_html, std::string("<!DOCTYPE html><html>"));

                std::string line_md;
                std::string line_html;
                while (std::getline(file_md, line_md)) {
                    if (!line_md.empty()) {
                        
                    }
                    filelines.push_back(line_md);
                    gLinecount_r++;
                }
                file_w(&file_html, std::string("</html>"));
                std::cout << "Wrote \"" << gLinecount_w << "\" lines to \"" << filename_html << "\"." << std::endl;



                file_html.close();
            }
            else { std::cout << "Could not open file \"" << filename_html << "\". " << std::endl; }

            std::cout << "Read \"" << gLinecount_r << "\" lines from \"" << filename_md << "\"." << std::endl;
            file_md.close();
        }
        else { std::cout << "File \"" << filename_md << "\" is  invalid. " << std::endl; }
    }
    else { 
        if (argc == 2) { std::cout << "No output directory for html file provided." << std::endl; }
        else if (argc == 1) { std::cout << "No markdown file provided." << std::endl; }
    }

    return 0;
}