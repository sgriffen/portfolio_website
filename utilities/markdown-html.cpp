#include <cstdlib>
#include <cstdio>
#include <cstring>
#include <cstdint>

#include <vector>
#include <fstream>
#include <iostream>

#include "./markdown-html_css.h"

uint32_t gLinecount_r = 0;

void file_w(std::ofstream *wstream, std::string wstr) {
    wstream->write(wstr.c_str(), wstr.length()); 
}
std::string md_html_header(std::string line_md) {
    size_t idx_header = line_md.find_last_of("#");
    size_t idx_space = line_md.find_first_of(" ");
    if (idx_header != std::string::npos && idx_space == idx_header + 1) { 
        std::string content_md = line_md.substr(idx_space);
        switch(idx_header) {
            case 0: return std::string("<div class=\"" + CSS_HEADER + "\">" + content_md + "</div>");
            case 1: return std::string("<div class=\"" + CSS_SUBHEADER + "\">" + content_md + "</div>");
            case 2: return std::string("<div class=\"" + CSS_SECTION_HEADER + "\">" + content_md + "</div>");
            case 3: return std::string("<div class=\"" + CSS_SECTION_SUBHEADER + "\">" + content_md + "</div>");
        }
    }
    return NULL;
}

int main(int argc, char* argv[]) {
    if (argc > 2) {
        std::vector<std::string> filelines;
        
        std::string filename_md(argv[1]);
        std::string outdir_html(argv[2]);
        std::ifstream file_md(filename_md);

        if (file_md.is_open()) {
            size_t idxa = filename_md.find_last_of("/");
            size_t idxb = filename_md.find_last_of(".");
            std::string filename_html(outdir_html + filename_md.substr(filename_md.find_last_of("/"), idxb - idxa) + ".html");
            std::ofstream file_html(filename_html);
            if (file_html.is_open()) {
                file_w(&file_html, std::string("<!DOCTYPE html><html>"));

                std::string line_md;
                std::string line_html;
                while (std::getline(file_md, line_md)) {
                    // check if line is a markdown header
                    std::string content_html(md_html_header(line_md));
                    // check if line is a markdown list
                    if (content_html.empty()) { 
                        
                    }
                    file_w(&file_html, content_html);
                    gLinecount_r++;
                }
                file_w(&file_html, std::string("</html>"));

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